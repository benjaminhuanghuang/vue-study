# Setup monorepo

## Init workspace

```sh
npm install pnpm -g

touch pnpm-workspace.yaml

pnpm add vue typescript sass -D -w

npx tsc --init

```

## Setup the test app (/play)

Setup play application base on vite to test the component library

```sh
cd play

pnpm init
# parse files with the .vue extension
pnpm add vite @vitejs/plugin-vue -D

touch vite.config.ts
```

@vitejs/plugin-vue will load the index.html under the play directory by default.

Add dev command for test app

```json
"scripts": {
    "dev": "vite"
},
```

Add play into workspace, change the pnpm-workspace.yaml file as follows:

```yaml
packages:
  - packages/*
  - play
```

Add dependency for the test app

```json
"dependencies": {
    "@myuilib/components": "workspace:*"
},
```
