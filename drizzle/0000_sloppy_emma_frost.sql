DO $$ BEGIN
 CREATE TYPE "mood" AS ENUM('sad', 'ok', 'happy');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "testTable" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"qty" bigint,
	"price" numeric(7, 2),
	"score" double precision,
	"delivered" boolean,
	"description" varchar(256),
	"name" char(10),
	"data" jsonb,
	"date" interval,
	"mood" "mood" DEFAULT 'ok'
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"full_name" text,
	"phone" varchar(256),
	"address" varchar(256),
	"score" integer
);
