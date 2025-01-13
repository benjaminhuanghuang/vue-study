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
npm i -D unplugin-vue-router
```

modify vite.config.ts

```js
import VueRouter form 'unplugin-vue-router/vite'

```

Modify the router/index.ts

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