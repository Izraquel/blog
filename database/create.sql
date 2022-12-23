create schema blog;

create table blos.post(
  id serial primary key,
  title text not null,
  date timestamp default now()
)