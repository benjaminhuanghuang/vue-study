# Building Vue3 Component Library from Scratch

- Monorepo
- ESLint, Prettier, Stylelint, and Husky for Code Standards

https://dev.to/markliu2013/building-a-vue-3-component-library-from-scratch-part-1-introduction-5132
https://github.com/markliu2013/StellarNovaUI

## Setup

```sh
npm install pnpm -g

touch pnpm-workspace.yaml

pnpm add vue typescript sass -D -w

npx tsc --init


```

setup play application base on vite to test the component library

```sh
cd play
pnpm i
# parse files with the .vue extension
pnpm add vite @vitejs/plugin-vue -D

touch vite.config.ts
```

@vitejs/plugin-vue will load the index.html under the play directory by default.

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

start play project

```sh
pnpm run dev
```
