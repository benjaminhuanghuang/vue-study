```sh
npm i -D unplugin-auto-import
```

modify vite.config.ts
```ts
import  AutoImport from 'unplugin-auto-import/vite'

```

modify tsconfig.app.json
```json
  "include": [
    ...
    "auto-imports.d.ts"
  ]
```