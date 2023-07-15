import {
  bigint,
  bigserial,
  boolean,
  char,
  date,
  decimal,
  doublePrecision,
  integer,
  interval,
  json,
  jsonb,
  numeric,
  pgEnum,
  pgTable,
  real,
  serial,
  smallserial,
  text,
  time,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  fullName: text("full_name"),
  phone: varchar("phone", { length: 256 }),
  address: varchar("address", { length: 256 }),
});

export const moodEnum = pgEnum("mood", ["sad", "ok", "happy"]);
export const testTable = pgTable("testTable", {
  id: bigserial("id", { mode: "bigint" }).primaryKey(),
  qty: bigint("qty", { mode: "bigint" }),
  price: numeric("price", { precision: 7, scale: 2 }), // 12345.67
  score: doublePrecision("score"),
  delivered: boolean("delivered"),
  // description: text("description"),
  description: varchar("description", { length: 256 }),
  name: char("name", { length: 10 }), // "chair     "
  data: jsonb("data").notNull().primaryKey(),
  startAt: time("startAt", { precision: 0, withTimezone: false }).defaultNow(),
  date: interval("date"),
  mood: moodEnum("mood").default("ok"),
});
