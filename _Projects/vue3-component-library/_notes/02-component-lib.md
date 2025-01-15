# Component library

## Create component and utils packages

The directory structure:

```
packages/
└── components/
|    └── src/
|        └── button/
|            ├── button.vue
|            ├── index.ts
|            ├── package.json
└── utils/
play/
```

## app.use Global Component Registration

Sometimes, when we use components, we want to directly use app.use() to mount the entire component library.
When using app.use(), it actually calls the install method of the passed parameter.
Therefore, we first add an install method to each component, and then export the entire component library.
We modify button/index.ts as follows:

```js
import _Button from "./button.vue";
import type { App, Plugin } from "vue";
type SFCWithInstall<T> = T & Plugin;
const withInstall = <T>(comp: T) => {
  (comp as SFCWithInstall<T>).install = (app: App) => {
    const name = (comp as any).name;
    // register component
    app.component(name, comp as SFCWithInstall<T>);
  };
  return comp as SFCWithInstall<T>;
};
export const Button = withInstall(_Button);
export default Button;
```

Modify components/index.ts to the following:

```js
import * as components from "./src/index";
export * from "./src/index";
import { App } from "vue";

export default {
  install: (app: App) => {
    for (let c in components) {
      app.use(components[c]);
    }
  },
};
```

globally mount the component library in play/main.ts.

```js
import { createApp } from "vue";
import App from "./app.vue";
import stellarnovaui from "@stellarnovaui/components";

const app = createApp(App);
app.use(stellarnovaui);

app.mount("#app");
```

## Property hints for global component

use Volar in VSCode to add hinting for the global component.

```sh
cd root
pnpm add @vue/runtime-core -D -w
```

Create components.d.ts file under packages/components/src/components.d.ts

```js

import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    EaButton: typeof components.Button;
    EaIcon: typeof components.Icon;
  }
}
export {};
```

add type to tsconfig.json to enable the hinting functionality.

```json
"compilerOptions": {
    //...
    "types": ["easyest/lib/src/components"]
},
```

## Use use defineOptions to name component

```sh
pnpm add unplugin-vue-define-options  -D -w
```

Then import this plugin in play/vite.config.ts

```js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// @ts-ignore
import DefineOptions from "unplugin-vue-define-options/vite";
export default defineConfig({
  plugins: [vue(), DefineOptions()],
});
```

Now we can use defineOptions to name component directly.

```js
<template>
  <button>Test Button</button>
</template>

<script lang="ts" setup>
    defineOptions({ name: "sn-button" });
</script>
```
