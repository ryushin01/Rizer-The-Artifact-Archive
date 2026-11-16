"use client";

import { Loader2, Trash2 } from "lucide-react";
import { toast } from "sonner";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@rizer/ui/components/alert-dialog";
import { Button } from "@rizer/ui/components/button";

import { useGuardedAction } from "@/shared/lib/use-guarded-action";

import { deleteArtifactAction } from "../api/actions";

/** 삭제 확인 대화상자. 원본과 타일, 주석도 함께 지워진다. */
export function DeleteArtifactButton({ id, title }: { id: string; title: string }) {
  const { pending, run } = useGuardedAction();
  // 성공하면 서버가 목록으로 보내므로(화면을 떠남) 잠금이 풀리지 않는다. 실패하면 알리고 다시 누를 수 있다.
  const onConfirm = () =>
    run(async () => {
      const result = await deleteArtifactAction(id);
      if (result && !result.ok) toast.error(result.message);
    });

  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button type="button" variant="outline" />}>
        <Trash2 aria-hidden />
        삭제
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>「{title}」을(를) 삭제할까요?</AlertDialogTitle>
          <AlertDialogDescription>
            해설, 주석, 원본 이미지와 딥줌 타일이 모두 지워지고 되돌릴 수 없습니다.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>취소</AlertDialogCancel>
          <AlertDialogAction variant="destructive" onClick={onConfirm} disabled={pending}>
            {pending && <Loader2 className="animate-spin" aria-hidden />}
            삭제
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
