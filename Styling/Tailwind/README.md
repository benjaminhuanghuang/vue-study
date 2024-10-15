# Tailwind


https://v2.tailwindcss.com/docs/guides/vue-3-vite

## Install
```sh
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

```
- Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.

- PostCSS: PostCSS is a JavaScript tool that transforms CSS code into an abstract syntax tree (AST) and provides an API for modifying it with JavaScript plugin

- Autoprefixer is a PostCSS plugin that can be used with Tailwind CSS to automatically 
adds any necessary vendor prefixes based on the browsers you tell it you need to support.


## Configuration
Create tailwind.config.js
```sh
npx tailwindcss init -p
```

Modify tailwind.config.js
```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Modify postcss.config.js
```js
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```

Create ./src/index.css and include index.css in main.js
包含 /*！@import */ 注释，以避免开发时在 Chrome DevTools 中出现的性能问题
```css
/* index.css */

/*! @import */
@tailwind base;
@tailwind components;
@tailwind utilities;
```