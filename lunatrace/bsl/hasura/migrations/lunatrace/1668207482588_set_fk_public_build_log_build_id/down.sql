alter table "public"."build_log" drop constraint "build_log_build_id_fkey",
  add constraint "build_log_build_id_fkey"
  foreign key ("build_id")
  references "public"."builds"
  ("id") on update no action on delete no action;
