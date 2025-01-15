Install dependency to workspace

```sh
pnpm add @types/node -D -w
```

Create paths.ts file in script/utils to maintain the paths of the component library.

Create command in packages/components/package.json

```json
 "scripts": {
    "build": "vite build",
    "test": "vitest",
    "coverage": "vitest run --coverage"
  },
```
