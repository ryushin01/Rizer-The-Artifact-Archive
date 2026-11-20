-- 낙관적 잠금 버전(유물 폼 내용, 주석 목록). 서버리스 인스턴스 여럿이 배포 직후 함께 마이그레이션해도 늦은 쪽이 실패하지 않게 IF NOT EXISTS로 둔다.
ALTER TABLE "artifacts" ADD COLUMN IF NOT EXISTS "content_version" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "artifacts" ADD COLUMN IF NOT EXISTS "annotations_version" integer DEFAULT 0 NOT NULL;
