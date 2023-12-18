set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

create table "public"."users" (
  "userId"         serial,
  "username"       text not null,
  "hashedPassword" text not null,
  "createdAt"      timestamptz(6) not null default now(),
  primary key ("userId"),
  unique ("username")
);

create table "public"."entries" (
  "entryId"  serial,
  "userId"   int not null,
  "title"    text not null,
  "notes"    text not null,
  "photoUrl" text not null,
  primary key ("entryId")
);

ALTER TABLE ONLY "public"."entries"
  ADD CONSTRAINT user_id_fkey FOREIGN KEY ("userId") REFERENCES "public"."users"("userId") ON UPDATE CASCADE ON DELETE RESTRICT;
