drop table if exists tasks;

create table
tasks (
    id bigint primary key generated always as identity not null,
    created_at timestamp default now() not null,
    name text not null,
    status current_status default 'in-progress' null,
    description text not null,
    due_date date default null,
    project_id bigint references projects(id) default null,
    collaborators text array default array[]::varchar[] not null
);
