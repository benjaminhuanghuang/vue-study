
Create profiles table

```sh
npm run db:migrate:new profiles-schema
```

This command will create file supabase/migrations/20250111222213_profiles-schema.sql

write sql script in the sql file 

```sh
npm run db:reset
npm run supabase:types
```

profiles table will created under supabase Table Editor