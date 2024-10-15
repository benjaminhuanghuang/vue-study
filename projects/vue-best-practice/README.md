# Vue Best Practice

- Vue 3 + TypeScript + Vite 
- Tailwind + Google fount + Font-awesome Icon
- Pinia + Router + Auth + API calling
- Vitest + @vue/test-utils
- Playwright

## Init Project
MAKE SURE node.js > 18.x
```sh
npm inti vite@latest
```

create src/shims-vue.d.ts to tell TS how to handel the .vue file


## Tailwind + Google Font + Icon
https://v2.tailwindcss.com/docs/guides/vue-3-vite

### Tailwind
```sh
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

npx tailwindcss init -p
```
PostCSS: A tool for transforming CSS with JavaScript
Autoprefixer is a PostCSS plugin that can be used with Tailwind CSS to automatically 
adds any necessary vendor prefixes based on the browsers you tell it you need to support.

Modify tailwind.config.js, using google font

Modify postcss.config.js

Create ./src/tailwind.css, include tailwind.css in main.js

### Google Font
Use Google font
```html
<link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap"
      rel="stylesheet"
/>
```
Add google font to  the fontFamily in tailwind.config.js

### Font Awesome Icon
https://docs.fontawesome.com/web/use-with/vue/add-icons
```sh
npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons @fortawesome/vue-fontawesome
```
use fontawesome in main.ts


## Router and Navigation
```sh
npm i vue-router
```
create src/router/index.js


Active link


## Pinia

```sh
npm i pinia 
```

## Vitest + @vue/test-utils 

```sh
npm i vitest @vue/test-utils jsdom -D
```

Make Vitest API to be available globally when you run Vitest. 
https://vitest.dev/config/#globals
```ts
/// vite.config.ts
/// <reference types="vitest" />
...
export default defineConfig({
  ...
  test: {
    globals: true,
    environment: 'jsdom' // or happy-dom, otherwise you will see error "ReferenceError: document is not defined" when you run the test
  },
});
```

To get TypeScript working with the vitest api globally, modify tsconfig.app.json
```json
{
  "compilerOptions": {
    "types": ["vitest/globals"]
  },
}
```

Install Extension Vitest and Vitest Runner
Run test using the link "Run(Vitest) | Debug(Vitest)" on the test

## Playwright
```
```

