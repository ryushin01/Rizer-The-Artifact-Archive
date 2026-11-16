import type { ArtifactSource, GalleryId, KindId } from "@rizer/domain";
import { boolean, index, integer, jsonb, pgTable, real, text, timestamp } from "drizzle-orm/pg-core";

import type { StoredImage } from "@/entities/artifact";

export const users = pgTable("users", {
  id: text("id").primaryKey(),
  email: text("email").notNull().unique(),
  name: text("name").notNull(),
  /** curator: 편집 가능, guest: 둘러보기만(포트폴리오 데모용) */
  role: text("role", { enum: ["curator", "guest"] }).notNull(),
  passwordHash: text("password_hash").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

/** 로그인 연속 실패 잠금 (이메일별) */
export const loginAttempts = pgTable("login_attempts", {
  email: text("email").primaryKey(),
  failures: integer("failures").notNull(),
  lastFailedAt: timestamp("last_failed_at", { withTimezone: true }).notNull(),
  lockedUntil: timestamp("locked_until", { withTimezone: true }),
});

export const artifacts = pgTable(
  "artifacts",
  {
    id: text("id").primaryKey(),
    slug: text("slug").notNull().unique(),
    title: text("title").notNull(),
    titleOriginal: text("title_original").notNull().default(""),
    gallery: text("gallery").$type<GalleryId>().notNull(),
    kind: text("kind").$type<KindId>().notNull(),
    owner: text("owner").notNull().default(""),
    maker: text("maker").notNull().default(""),
    power: text("power").notNull(),
    firstRecord: text("first_record").notNull(),
    recordYear: integer("record_year").notNull(),
    summary: text("summary").notNull(),
    story: text("story").notNull(),
    imageAlt: text("image_alt").notNull(),
    status: text("status", { enum: ["draft", "published"] }).notNull().default("draft"),
    featured: boolean("featured").notNull().default(false),
    source: jsonb("source").$type<ArtifactSource>().notNull(),
    image: jsonb("image").$type<StoredImage | null>(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [index("artifacts_status_idx").on(t.status), index("artifacts_gallery_idx").on(t.gallery)],
);

/**
 * 큐레이터가 지운 시드 유물의 주소. 서버가 켜질 때 카탈로그에 새로 더한 시드 유물만 넣고(insertMissingSeedArtifacts),
 * 여기 있는 주소는 다시 넣지 않는다. 되살리려면 이 줄을 지운다.
 */
export const deletedSeedSlugs = pgTable("deleted_seed_slugs", {
  slug: text("slug").primaryKey(),
  deletedAt: timestamp("deleted_at", { withTimezone: true }).notNull().defaultNow(),
});

export const annotations = pgTable(
  "annotations",
  {
    id: text("id").primaryKey(),
    artifactId: text("artifact_id")
      .notNull()
      .references(() => artifacts.id, { onDelete: "cascade" }),
    title: text("title").notNull(),
    body: text("body").notNull(),
    x: real("x").notNull(),
    y: real("y").notNull(),
    w: real("w").notNull(),
    h: real("h").notNull(),
    order: integer("order").notNull(),
  },
  (t) => [index("annotations_artifact_idx").on(t.artifactId)],
);
