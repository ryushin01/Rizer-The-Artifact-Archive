import { mkdir, readdir, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";

import sharp from "sharp";

/**
 * 초고해상도 이미지를 딥줌(DZI) 타일로 자른다.
 *
 * - 타일: 256px(겹침 1px을 더해 254 + 1 + 1), WebP. 화면에 보이는 영역의 타일만 내려받으므로
 *   원본이 수백 MB여도 처음 화면은 수십 KB로 열린다.
 * - 미리보기: 긴 변 1600px WebP. 첫 화면의 큰 사진과 공유 이미지에 쓴다.
 * - 썸네일: 긴 변 960px WebP. 유물 카드(넓어야 340px, 3배 화면까지)와 관리 화면 목록에 쓴다. 미리보기의 3분의 1 크기.
 * - LQIP: 긴 변 24px WebP를 data URL로. 미리보기가 오기 전 흐린 자리 표시자.
 * - 대표 색: 배경과 스켈레톤 색.
 * 미리보기·썸네일·LQIP·대표 색은 원본을 한 번만 줄인 미리보기에서 만든다(큰 원본을 여러 번 해독하지 않는다).
 *
 * 경로의 turbopackIgnore 표시: 출력 폴더는 실행 중에 정해지는 작업 폴더라서, 번들러가 프로젝트 전체를
 * 서버 번들에 넣지 않게 한다.
 */

export const TILE_SIZE = 254;
export const TILE_OVERLAP = 1;
export const PREVIEW_SIZE = 1600;
export const THUMB_SIZE = 960;

/** 기본 픽셀 수 제한: 매우 큰 이미지(파노라마·고해상도 스캔)도 열 수 있게 1기가픽셀(CLI용). */
const LIMIT_INPUT_PIXELS = 1_000_000_000;

export type TileResult = {
  width: number;
  height: number;
  /** outDir 기준 상대 경로 */
  dziPath: string;
  previewPath: string;
  thumbPath: string;
  tileCount: number;
  lqip: string;
  dominantColor: string;
};

export type TileOptions = {
  /** 결과물 이름(파일 이름 앞부분). 기본값 "image" */
  name?: string;
  /** WebP 품질(1~100). 기본값 82 */
  quality?: number;
  /** 타일 한 변(px, 겹침 제외). 기본값 254. 크게 하면 파일 수가 줄어든다(510이면 약 4분의 1). */
  tileSize?: number;
  /** 원본의 긴 변을 이 크기까지 줄인 뒤 자른다. 기본값은 줄이지 않음. */
  maxSize?: number;
  /**
   * 읽을 수 있는 최대 픽셀 수. 넘으면 PixelLimitError를 던진다. 기본값 10억(CLI).
   * 서버(메모리 2GB 안팎)에서 자를 때는 낮게 둔다. 해독한 원본이 메모리에 올라가기 때문이다.
   */
  maxPixels?: number;
};

/** 원본이 maxPixels보다 크다. 서버 업로드라면 CLI(pnpm tiles)로 잘라야 한다. */
export class PixelLimitError extends Error {
  constructor(
    readonly pixels: number,
    readonly limit: number,
  ) {
    super(`이미지가 ${pixels.toLocaleString("en-US")}픽셀로 한도(${limit.toLocaleString("en-US")})보다 큽니다.`);
    this.name = "PixelLimitError";
  }
}

const hex = (n: number) => n.toString(16).padStart(2, "0");

/** input(파일 경로 또는 Buffer)을 outDir 안에 <name>.dzi, <name>_files/, preview.webp, thumb.webp로 만든다. */
export async function generateDeepZoom(
  input: string | Buffer,
  outDir: string,
  { name = "image", quality = 82, tileSize = TILE_SIZE, maxSize, maxPixels = LIMIT_INPUT_PIXELS }: TileOptions = {},
): Promise<TileResult> {
  // 크기(머리글)만 먼저 읽어, 한도를 넘는 원본은 해독하기 전에 거절한다.
  const header = await sharp(input, { limitInputPixels: false }).metadata();
  const pixels = (header.width ?? 0) * (header.height ?? 0);
  if (pixels > maxPixels) throw new PixelLimitError(pixels, maxPixels);
  const original = () => sharp(input, { limitInputPixels: maxPixels }).rotate();
  const meta = await original().metadata();
  // rotate()가 EXIF 방향을 반영하므로, 90도 회전된 사진은 가로세로를 바꾼다.
  const swapped = (meta.orientation ?? 1) >= 5;
  const fullWidth = swapped ? meta.height : meta.width;
  const fullHeight = swapped ? meta.width : meta.height;
  if (!fullWidth || !fullHeight) throw new Error("이미지 크기를 읽지 못했습니다.");

  // 최대 크기가 있으면 한 번 줄여 두고 그 결과를 원본처럼 쓴다.
  const scale = maxSize ? Math.min(1, maxSize / Math.max(fullWidth, fullHeight)) : 1;
  const width = Math.round(fullWidth * scale);
  const height = Math.round(fullHeight * scale);
  const resized =
    scale < 1 ? await original().resize(width, height, { fit: "fill" }).png({ compressionLevel: 1 }).toBuffer() : null;
  const source = () => (resized ? sharp(resized, { limitInputPixels: maxPixels }) : original());

  await rm(path.join(/*turbopackIgnore: true*/ outDir, `${name}_files`), { recursive: true, force: true });
  await mkdir(outDir, { recursive: true });

  const dziBase = path.join(/*turbopackIgnore: true*/ outDir, name);
  await source()
    .toColourspace("srgb")
    .webp({ quality, effort: 4 })
    .tile({ size: tileSize, overlap: TILE_OVERLAP, layout: "dz", container: "fs" })
    .toFile(dziBase);

  // 원본은 미리보기를 만들 때 한 번만 더 해독하고, 작은 결과물은 미리보기에서 만든다.
  const preview = await source()
    .resize(PREVIEW_SIZE, PREVIEW_SIZE, { fit: "inside", withoutEnlargement: true })
    .webp({ quality: 80 })
    .toBuffer();
  await writeFile(path.join(/*turbopackIgnore: true*/ outDir, "preview.webp"), preview);
  const small = () => sharp(preview);
  await writeThumbnail(preview, path.join(/*turbopackIgnore: true*/ outDir, "thumb.webp"));
  const lqipBuffer = await small().resize(24, 24, { fit: "inside" }).webp({ quality: 40 }).toBuffer();
  const { dominant } = await small().resize(64, 64, { fit: "inside" }).stats();

  return {
    width,
    height,
    dziPath: `${name}.dzi`,
    previewPath: "preview.webp",
    thumbPath: "thumb.webp",
    tileCount: await countFiles(path.join(/*turbopackIgnore: true*/ outDir, `${name}_files`)),
    lqip: `data:image/webp;base64,${lqipBuffer.toString("base64")}`,
    dominantColor: `#${hex(dominant.r)}${hex(dominant.g)}${hex(dominant.b)}`,
  };
}

/** 미리보기(파일 경로 또는 Buffer)에서 카드용 썸네일(긴 변 960px WebP)을 만든다. 작은 이미지는 키우지 않는다. */
export async function writeThumbnail(preview: string | Buffer, outFile: string): Promise<void> {
  await sharp(preview)
    .resize(THUMB_SIZE, THUMB_SIZE, { fit: "inside", withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(outFile);
}

async function countFiles(dir: string): Promise<number> {
  let count = 0;
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    count += entry.isDirectory() ? await countFiles(path.join(/*turbopackIgnore: true*/ dir, entry.name)) : 1;
  }
  return count;
}

/** 폴더 안 모든 파일을 상대 경로로 나열한다. 스토리지에 올릴 때 쓴다. */
export async function listFiles(dir: string, base = dir): Promise<string[]> {
  const files: string[] = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(/*turbopackIgnore: true*/ dir, entry.name);
    if (entry.isDirectory()) files.push(...(await listFiles(full, base)));
    else if ((await stat(full)).isFile()) files.push(path.relative(base, full).split(path.sep).join("/"));
  }
  return files;
}

/** 확장자로 Content-Type을 고른다. */
export function contentTypeOf(file: string): string {
  const ext = path.extname(file).toLowerCase();
  return (
    {
      ".dzi": "application/xml",
      ".xml": "application/xml",
      ".webp": "image/webp",
      ".jpg": "image/jpeg",
      ".jpeg": "image/jpeg",
      ".png": "image/png",
      ".json": "application/json",
    }[ext] ?? "application/octet-stream"
  );
}
