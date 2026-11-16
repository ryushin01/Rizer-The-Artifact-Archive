/* eslint-disable @next/next/no-img-element -- 스토리지의 미리보기라 next/image 최적화를 거치지 않는다 */
import type { Artifact } from "@rizer/domain";
import { MessageSquareText } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@rizer/ui/components/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@rizer/ui/components/card";

import { ImageUploader } from "./image-uploader";

export function ImageCard({ artifact, readOnly }: { artifact: Artifact; readOnly: boolean }) {
  const { image } = artifact;
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h2>딥줌 이미지</h2>
        </CardTitle>
        <CardDescription>
          {image
            ? `${image.width.toLocaleString("ko-KR")} × ${image.height.toLocaleString("ko-KR")}px · 딥줌 타일(WebP)`
            : "원본을 올리면 딥줌 타일로 잘라 저장합니다. 이미지가 있어야 공개할 수 있습니다."}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 sm:grid-cols-[200px_1fr]">
        <div
          className="flex aspect-square items-center justify-center overflow-hidden rounded-lg border"
          style={{ backgroundColor: image?.dominantColor ?? "var(--muted)" }}
        >
          {image ? (
            <img
              src={image.thumbUrl ?? image.previewUrl}
              alt={artifact.imageAlt}
              className="size-full object-contain"
              style={{ backgroundImage: `url(${image.lqip})`, backgroundSize: "cover" }}
            />
          ) : (
            // 회색 바탕(muted) 위라 muted-foreground로는 대비가 4.34:1이라 더 진하게 쓴다(KWCAG 5.4.3, 4.5:1 이상).
            <span className="text-sm text-foreground/70">이미지 없음</span>
          )}
        </div>
        <div className="flex flex-col gap-4">
          <ImageUploader artifactId={artifact.id} hasImage={Boolean(image)} disabled={readOnly} />
          {image && (
            <Link href={`/artifacts/${artifact.id}/annotations`} className={buttonVariants({ variant: "secondary", className: "w-fit" })}>
              <MessageSquareText aria-hidden />
              주석 편집 ({artifact.annotationCount}개)
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
