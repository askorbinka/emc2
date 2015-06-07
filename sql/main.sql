create table account (
    id uuid not null,
    email text,
    full_name text,
    primary key(id) 
)

create table activity_log (
   id uuid not null,
   account_id not null,
   date_time timestamp not null,
   lat float,
   lon float,
   agent text,
   activity_type text,
   primary key(id)
)



