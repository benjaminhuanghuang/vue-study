# Vue Best Practice

- Vue 3 + TypeScript + Vite 
- Tailwind + google fount + icon
- Pinia + Router + Auth + API calling
- Vitest + @vue/test-utils
- Playwright

## Init Project
MAKE SURE node.js > 18.x
```sh
npm inti vite@latest
```

## Tailwind + Font + Icon
https://v2.tailwindcss.com/docs/guides/vue-3-vite

```sh
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

npx tailwindcss init -p

# Modify tailwind.config.js
# Modify postcss.config.js
# Create ./src/index.css
# include index.css in main.js
```
PostCSS: A tool for transforming CSS with JavaScript
Autoprefixer is a PostCSS plugin that can be used with Tailwind CSS to automatically 
adds any necessary vendor prefixes based on the browsers you tell it you need to support.




```html
<link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap"
      rel="stylesheet"
/>
<link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
    integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
/>

```

## Pinia

```sh
npm i pinia 
```

## Router
```sh
npm i vue-router
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

