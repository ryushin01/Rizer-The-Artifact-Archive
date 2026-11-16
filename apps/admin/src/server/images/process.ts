import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";

import { contentTypeOf, generateDeepZoom, listFiles, PixelLimitError, type TileOptions } from "@rizer/tiles";
import type { Storage } from "@rizer/storage";

import type { StoredImage } from "@/entities/artifact";

/** 어드민에서 받는 원본의 최대 크기. 이보다 큰 원본은 `pnpm tiles` CLI로 자른다. */
export const MAX_UPLOAD_BYTES = 80 * 1024 * 1024;
export const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/tiff"] as const;

/** 원본 키. 유물마다 한 장이다. */
export const originalKey = (artifactId: string, ext: string) => `artifacts/${artifactId}/original.${ext}`;

export const extensionOf = (contentType: string) =>
  ({ "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp", "image/tiff": "tif" })[contentType] ?? "bin";

/**
 * 서버에서 자르는 원본의 최대 픽셀 수(sharp 기본값과 같은 약 2억 6800만). 해독한 원본이 함수 메모리(2GB 안팎)에 올라가므로,
 * 이보다 큰 원본(초고해상도 스캔)은 `pnpm tiles` CLI로 자른다(CLI는 10억까지).
 */
export const MAX_UPLOAD_PIXELS = 0x3fff * 0x3fff;

/**
 * 타일 크기 510px: 254px보다 파일 수가 약 4분의 1이라 Vercel Blob의 업로드 작업 한도(월 2,000회)를 덜 쓴다.
 * 긴 변은 6000px까지 남긴다(The Met 원본은 4000px, 클리블랜드는 3400px 안팎).
 */
const UPLOAD_TILE_OPTIONS = { tileSize: 510, maxSize: 6000, maxPixels: MAX_UPLOAD_PIXELS } as const;

/** 타일 생성 실패를 큐레이터가 읽을 안내로 바꾼다. */
export function tilingErrorMessage(error: unknown): string {
  // 번들이 모듈을 두 번 싣는 경우에도 알아보도록 이름으로도 확인한다.
  if (error instanceof PixelLimitError || (error instanceof Error && error.name === "PixelLimitError")) {
    return "이미지가 너무 커서 서버에서 자를 수 없습니다. pnpm tiles 명령으로 잘라 올려 주세요.";
  }
  return "이미지를 읽지 못했습니다. 손상되지 않은 이미지인지 확인해 주세요.";
}

/**
 * 원본을 딥줌 타일로 잘라 스토리지에 올린다.
 * 키에 버전(시각)을 넣어 경로가 매번 달라지므로, CDN이 오래 캐시해도 새 타일이 바로 보인다.
 * 올린 뒤 이전 버전의 타일은 지운다.
 */
export async function tileAndUpload(
  storage: Storage,
  artifactId: string,
  original: { key: string; body: Buffer },
  previous: StoredImage | null,
  now = new Date(),
  options: TileOptions = UPLOAD_TILE_OPTIONS,
): Promise<StoredImage> {
  const version = now.toISOString().replace(/[-:.TZ]/g, "").slice(0, 14);
  const prefix = `artifacts/${artifactId}/v${version}`;
  const workDir = await mkdtemp(path.join(tmpdir(), "rizer-tiles-"));
  try {
    const result = await generateDeepZoom(original.body, workDir, { name: "image", ...options });
    await storage.putFiles(workDir, await listFiles(workDir), prefix, contentTypeOf);
    const image: StoredImage = {
      dziKey: `${prefix}/${result.dziPath}`,
      previewKey: `${prefix}/${result.previewPath}`,
      thumbKey: `${prefix}/${result.thumbPath}`,
      originalKey: original.key,
      width: result.width,
      height: result.height,
      lqip: result.lqip,
      dominantColor: result.dominantColor,
      tileCount: result.tileCount,
      version,
    };
    if (previous && previous.version !== version) {
      await storage.removePrefix(`artifacts/${artifactId}/v${previous.version}`);
    }
    return image;
  } finally {
    await rm(workDir, { recursive: true, force: true });
  }
}
