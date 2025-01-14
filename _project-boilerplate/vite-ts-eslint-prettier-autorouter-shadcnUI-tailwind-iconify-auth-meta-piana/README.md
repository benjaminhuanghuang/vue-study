# Vue 3 + TS + Vite Project

ESLint
Prettier
shadcnUI + tailwind + 

AutoRouter
iconify



## Init Vite-Vue3-TS project

```sh
npm create vite@latest
  ts
  vue
```

## ESLint

```sh
npm i -D eslint eslint-plugin-vue
```

Add script

```json
"lint": "eslint . --fix",
```

add eslint.config.js (new format for v9.18.0)
https://eslint.org/docs/latest/use/configure/migration-guide


## Prettier
```sh
npm i -D prettier
```

Add script

```json
"format" : "prettier --write src/"
```

Add .prettierrc.json

set default formatter for VS code in .setting.json

```json
{
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

## Auto Router

```sh
npm i vue-router
npm i -D unplugin-vue-router
```

modify vite.config.ts
```js
import VueRouter form 'unplugin-vue-router/vite' 

plugins: [VueRouter(), vue()]
```

Add router type to the tsconfig.app.json
```json
"include": [
  "typed-touter.d.ts",
],
"moduleResolution": "bundler",
```

Modify the router/index.ts
```js
import { createRouter, createWebHistory } from 'vue-router/auto' // use auto routes
import {routes} from 'vue-router/auto-routes'

```

Modify main.ts
```js
import router from './router'

app.use(router)
```

rename the folder to pages

add "typed-touter.d.ts" to tsconfig.app.json

add reference to `env.d.ts` to tell IDE about global types
```
/// <reference types="unplugin-vue-router/client" />
``` 

![](./auto-routes.png)


Fix the ESlint warning
```js
{
    rules: {
        'vue/multi-word-component-names': ['off']
    }
}
```

## shadcn-vue
https://www.shadcn-vue.com/docs/installation/vite.html

```sh
npm i -D tailwindcss autoprefixer
```

Modify vite.config.ts

```js
css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()]
    }
  },
resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
```

Modify tsconfig.app.json
```json
 "compilerOptions": {
  "baseUrl": ".",
      "paths": {
        "@/*": ["./src/*"]
      }
 }
```

delete default css  ./src/style.css

```sh
npx shadcn-vue@latest init
 TypeScript
 Vite
 Default
 Slate
```

import css in main.css
```js
import './assets/index.css'
```

Add component
```sh
npx shadcn-vue@latest add button

npx shadcn-vue@latest add input

npx shadcn-vue@latest add dropdown-menu

npx shadcn-vue@latest add avatar

npx shadcn-vue@latest add sheet
```

## iconify

```sh
npm i iconify-icon
```

Modify main.ts
```js
import 'iconify-icon'
```

modify vite.config.ts
```ts
 vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.startsWith('iconify-icon')
        }}
    }),
```