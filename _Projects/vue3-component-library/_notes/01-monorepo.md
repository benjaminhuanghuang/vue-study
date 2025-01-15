# Setup monorepo

## Init workspace

```sh
npm install pnpm -g

touch pnpm-workspace.yaml

pnpm add vue typescript sass -D -w

npx tsc --init

```

setup play application base on vite to test the component library

```sh
cd play

pnpm init
# parse files with the .vue extension
pnpm add vite @vitejs/plugin-vue -D

touch vite.config.ts
```

@vitejs/plugin-vue will load the index.html under the play directory by default.

## Add packages into workspace

Modify the pnpm-workspace.yaml file as follows:

```yaml
packages:
  - packages/*
  - play
```

At this point, the play project can install the packages from the local packages directory.

```sh
pnpm add @myuilib/components
```

add dependency

```json
  "dependencies": {
    "@myuilib/shared": "workspace:*"
  },
```

## Start play project

```sh
pnpm run dev
```
