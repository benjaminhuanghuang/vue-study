# Setup Jest + Vue Test Utils

## Install

```sh
npm i -D jest jest-environment-jsdom babel-jest @babel/preset-env @vue/vue2-jest

npm i -D @vue/test-utils
```
jest-environment-jsdom: Provides a browser-like environment for testing.
babel-jest: Transpiles your JavaScript code for Jest.
@vue/vue2-jest: A transformer to handle Vue single-file components in Jest.
@vue/test-utils 1 targets Vue2.

For typescript
```sh
npm i -D ts-jest @types/jest
```
## Config

Config jest by adding a jest.config.js file in the root of your project or by adding a jest section in your package.json.
```js
// Jest can simulate the DOM using jsdom
testEnvironment: "jsdom",

// Tells Jest to process .vue files using vue-jest
transform: {
"^.+\\.vue$": "@vue/vue2-jest",
"^.+\\js$": "babel-jest",
//"^.+\\.ts$": "ts-jest", // If you're using TypeScript
},

```

## Config babel
babel.config.js
```
```

## Reference

- Integrating Jest Testing into an Existing Vue 3 Project with ViteJs
https://dev.to/integridsolutions/integrating-jest-testing-into-an-existing-vue-3-project-with-vitejs-3m13