"use client";

import { ImageUp, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { type ChangeEvent, useId, useRef, useState } from "react";
import { toast } from "sonner";

import { Button } from "@rizer/ui/components/button";
import { Field, FieldDescription, FieldLabel } from "@rizer/ui/components/field";

import { ACTION_ERROR_MESSAGE, isNavigationSignal } from "@/shared/lib/use-guarded-action";

import { processUploadAction, requestUploadAction } from "../api/upload-actions";

/** 큐레이터에게 그대로 보여 줄 안내. 그 밖의 오류(서버 액션 호출 실패 등)는 공통 안내로 바꾼다. */
class UploadError extends Error {}

type Phase = { kind: "idle" } | { kind: "uploading"; percent: number } | { kind: "tiling" };

/** XMLHttpRequest로 올려 진행률을 보여 준다(fetch는 업로드 진행률을 주지 않는다). */
function send(method: "PUT" | "POST", url: string, body: Blob | FormData, contentType: string | null, onProgress: (p: number) => void) {
  return new Promise<{ status: number; text: string }>((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    if (contentType) xhr.setRequestHeader("content-type", contentType);
    xhr.upload.onprogress = (e) => e.lengthComputable && onProgress(Math.round((e.loaded / e.total) * 100));
    xhr.onload = () => resolve({ status: xhr.status, text: xhr.responseText });
    xhr.onerror = () => reject(new UploadError("네트워크 오류로 올리지 못했습니다."));
    xhr.send(body);
  });
}

/**
 * 원본 이미지를 올려 딥줌 타일로 자른다.
 * 운영(R2)은 서명된 주소로 스토리지에 바로 올린 뒤 타일링을 요청하고, 개발은 업로드 라우트가 한 번에 처리한다.
 */
export function ImageUploader({ artifactId, hasImage, disabled }: { artifactId: string; hasImage: boolean; disabled: boolean }) {
  const router = useRouter();
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [phase, setPhase] = useState<Phase>({ kind: "idle" });
  const busy = phase.kind !== "idle";
  const label = hasImage ? "원본 이미지 바꾸기" : "원본 이미지 올리기";

  async function upload(file: File) {
    const ticket = await requestUploadAction(artifactId, file.type, file.size);
    if (!ticket.ok) throw new UploadError(ticket.message);
    setPhase({ kind: "uploading", percent: 0 });
    const progress = (percent: number) => setPhase(percent >= 100 ? { kind: "tiling" } : { kind: "uploading", percent });

    if (ticket.mode === "presigned") {
      const res = await send("PUT", ticket.url, file, file.type, progress);
      if (res.status >= 300) throw new UploadError(`스토리지가 업로드를 거절했습니다(${res.status}).`);
      setPhase({ kind: "tiling" });
      const result = await processUploadAction(artifactId, ticket.key);
      if (!result.ok) throw new UploadError(result.message);
      return result.message;
    }
    const data = new FormData();
    data.append("file", file);
    const res = await send("POST", ticket.url, data, null, progress);
    let body: { message?: string } = {};
    try {
      body = JSON.parse(res.text || "{}") as { message?: string };
    } catch {
      /* JSON이 아닌 응답(프록시 오류 화면 등)은 상태 코드로 안내한다. */
    }
    if (res.status >= 300) throw new UploadError(body.message ?? `업로드에 실패했습니다(${res.status}).`);
    return body.message ?? "이미지를 올렸습니다.";
  }

  const locked = useRef(false);
  async function onChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file || locked.current) return;
    locked.current = true;
    try {
      toast.success(await upload(file));
      router.refresh();
    } catch (error) {
      // 로그인이 만료돼 로그인 화면으로 보내는 신호 등은 Next.js가 이미 화면을 옮기고 있다.
      if (isNavigationSignal(error)) return;
      if (!(error instanceof UploadError)) console.error(error);
      toast.error(error instanceof UploadError ? error.message : ACTION_ERROR_MESSAGE);
    } finally {
      setPhase({ kind: "idle" });
      locked.current = false;
    }
  }

  return (
    <Field>
      <FieldLabel htmlFor={inputId}>{label}</FieldLabel>
      <input
        ref={inputRef}
        id={inputId}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/tiff"
        className="sr-only"
        // 키보드 초점은 아래 버튼이 받는다(탭 정지가 두 번 생기지 않게).
        tabIndex={-1}
        onChange={onChange}
        disabled={disabled || busy}
      />
      <Button type="button" variant="outline" onClick={() => inputRef.current?.click()}
        disabled={disabled || busy}
        className="w-fit"
        aria-label={`${label}, 파일 선택`}
        aria-describedby={`${inputId}-help`}
      >
        {busy ? <Loader2 className="animate-spin" aria-hidden /> : <ImageUp aria-hidden />}
        파일 선택
      </Button>
      <FieldDescription id={`${inputId}-help`} aria-live="polite">
        {phase.kind === "uploading"
          ? `올리는 중… ${phase.percent}%`
          : phase.kind === "tiling"
            ? "딥줌 타일로 자르는 중입니다. 큰 이미지는 1분까지 걸립니다."
            : "JPG, PNG, WebP, TIFF · 80MB까지. 더 큰 원본은 pnpm tiles 명령으로 자릅니다."}
      </FieldDescription>
    </Field>
  );
}
