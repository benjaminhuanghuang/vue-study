# Setup Vue3 + Vite + Jest + Vue Test Utils + Typescript project

Create project
```sh
npm create vite@latest
vue
typescript
```


## Setup Jest for Vue3 and Typescript
```sh
npm i -D jest jest-environment-jsdom babel-jest @babel/preset-env @vue/vue3-jest

# for TS
npm i -D ts-jest @types/jest @babel/preset-typescript

npm i -D @vue/test-utils
```
jest-environment-jsdom: Provides a browser-like environment for testing.
babel-jest: Transpiles your JavaScript code for Jest.
@vue/vue3-jest: A transformer to handle Vue single-file components in Jest.
@vue/test-utils 2 targets Vue3.
ts-jest is a TS preprocessor with source map support for Jest that lets you use Jest to test projects written in TypeScript.


Modify babel.config.js
```js
module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript',
  ],
};
```

Modify tsconfig.js
```js
"lib": ["DOM", "ES6"],  
"types": ["jest"],    
```

Use es6 mode in package.json, support "import" syntax in .js file
```
"type": 'module'
```
## Config Jest
Config jest by adding a jest.config.js file in the root of your project or by adding a jest section in your package.json.
```js
// Jest can simulate the DOM using jsdom
testEnvironment: "jsdom",

// Tells Jest to process .vue files using vue-jest
transform: {
"^.+\\.vue$": "@vue/vue3-jest",
"^.+\\js$": "babel-jest",
"^.+\\.ts$": "ts-jest", // If you're using TypeScript
},

```


## Use @ path
jsconfig.json
```
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "exclude": ["node_modules", "dist"]
}
```

## Reference

https://jestjs.io/docs/getting-started

- Integrating Jest Testing into an Existing Vue 3 Project with ViteJs
https://dev.to/integridsolutions/integrating-jest-testing-into-an-existing-vue-3-project-with-vitejs-3m13