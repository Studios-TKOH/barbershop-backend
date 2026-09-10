-- Initial database capabilities shared by later domain migrations.
create extension if not exists btree_gist with schema extensions;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
security invoker
set search_path = ''
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

comment on function public.set_updated_at() is
  'Reusable trigger function for updated_at columns. Domain tables are introduced by milestone migrations.';
