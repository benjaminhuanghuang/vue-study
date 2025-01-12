
# shadcnUI

```sh
npm i -D tailwindcss autoprefixer
```

Modify vite.config


Modify tsconfig.app.json
```json
 "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
```

```sh
npx shadcn-vue@latest init
 TypeScript
 Vite
 Default
 Slate
```


Add component
```sh
npx shadcn-vue@latest add button

npx shadcn-vue@latest add input

npx shadcn-vue@latest add dropdown-menu

npx shadcn-vue@latest add avatar

```

copy svg code from 
https://icon-sets.iconify.design/lucide/

or
```sh
npm i iconify-icon
```
import 'iconify-icon'

modify vite.config.ts
```ts
 vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.startsWith('iconify-icon')
        }}
    }),
```