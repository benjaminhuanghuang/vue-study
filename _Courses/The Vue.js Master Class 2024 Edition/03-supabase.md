
# Supabase


Create organization

Create project "pulse" and db password "dba@2025"

Install 
https://supabase.com/docs/reference/javascript/installing
```
npm install @supabase/supabase-js@2.43.4

```

Create lib/supabaseClient.ts



## Create table 
Database -> Create table -> Add Column


## SQL editor
```sql
drop table if exists projects;
drop type if exists current_status;
create type current_status as enum ('in-progress', ' completed');

create table
projects (
    id bigint primary key generated always as identity not null,
    created_at timestamp default now() not null,
    name text not null,
    slug text unique not null,
    status current_status default 'in-progress' null,
    collaborators text array default array[]::varchar[] not null
);

insert into projects (name, slug) values ('project one', 'project-one')
```

## migration
```sh
npm install supabase -D
```

add script
```
"supabase:init": "suabase init"
```


## Seed db using faker-js
```
npm i @faker-js/faker -D
```
create database/seek.js

Need node v20


## Data type
In the project API Doc -> Introduction -> Generate and download types

Add "database/types.ts" to tsconfig


## Tasks
npx supabase migration new tasks-schema
npx supabase migration up --linked 
npm run supabase:types  