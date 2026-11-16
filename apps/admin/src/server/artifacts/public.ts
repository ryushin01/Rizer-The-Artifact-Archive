import type { Annotation, Artifact, ArtifactSummary, DeepZoomImage } from "@rizer/domain";
import type { Storage } from "@rizer/storage";

import type { StoredImage } from "@/entities/artifact";

import type { AnnotationRow, ArtifactWithCount } from "./repository";

/**
 * 카드용 썸네일 키. 저장된 키가 없어도 공개 사이트의 정적 시드 타일(tiles/…)에는 미리보기 옆에 썸네일이 있으므로
 * 그 경로를 쓴다(큐레이터가 고쳐서 시드 동기화가 건드리지 않는 시드 유물도 썸네일을 받는다).
 */
function thumbKeyOf(image: StoredImage): string | undefined {
  if (image.thumbKey) return image.thumbKey;
  if (image.previewKey.startsWith("tiles/") && image.previewKey.endsWith("/preview.webp")) {
    return image.previewKey.replace(/preview\.webp$/, "thumb.webp");
  }
  return undefined;
}

/** 저장된 이미지(스토리지 키)를 공개 주소가 담긴 딥줌 이미지로 바꾼다. */
function toDeepZoomImage(image: StoredImage | null, storage: Pick<Storage, "publicUrl">): DeepZoomImage | null {
  if (!image) return null;
  const thumbKey = thumbKeyOf(image);
  return {
    dziUrl: storage.publicUrl(image.dziKey),
    previewUrl: storage.publicUrl(image.previewKey),
    ...(thumbKey && { thumbUrl: storage.publicUrl(thumbKey) }),
    width: image.width,
    height: image.height,
    lqip: image.lqip,
    dominantColor: image.dominantColor,
  };
}

export function toArtifact(row: ArtifactWithCount, storage: Pick<Storage, "publicUrl">): Artifact {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    titleOriginal: row.titleOriginal,
    gallery: row.gallery,
    kind: row.kind,
    owner: row.owner,
    maker: row.maker,
    power: row.power,
    firstRecord: row.firstRecord,
    recordYear: row.recordYear,
    summary: row.summary,
    story: row.story,
    imageAlt: row.imageAlt,
    status: row.status,
    featured: row.featured,
    source: row.source,
    image: toDeepZoomImage(row.image, storage),
    annotationCount: Number(row.annotationCount),
    updatedAt: row.updatedAt.toISOString(),
  };
}

export function toArtifactSummary(row: ArtifactWithCount, storage: Pick<Storage, "publicUrl">): ArtifactSummary {
  const { story: _story, source: _source, ...rest } = toArtifact(row, storage);
  return rest;
}

export function toAnnotation(row: AnnotationRow): Annotation {
  return {
    id: row.id,
    artifactId: row.artifactId,
    title: row.title,
    body: row.body,
    order: row.order,
    region: { x: row.x, y: row.y, w: row.w, h: row.h },
  };
}
