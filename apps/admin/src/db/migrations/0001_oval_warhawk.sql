-- 서버리스 인스턴스 여럿이 배포 직후 함께 마이그레이션해도 늦은 쪽이 실패하지 않게 IF NOT EXISTS로 둔다.
CREATE TABLE IF NOT EXISTS "deleted_seed_slugs" (
	"slug" text PRIMARY KEY NOT NULL,
	"deleted_at" timestamp with time zone DEFAULT now() NOT NULL
);
