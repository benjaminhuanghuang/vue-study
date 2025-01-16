# Vue 3 + Vite + Jest + Vue/test-utils + TS project setup

Create project

```sh
npm create vite@latest
    vue
    typescript
```

## Setup Jest for Vue3 and Typescript

```sh
npm i -D jest jest-environment-jsdom babel-jest @babel/preset-env @vue/vue3-jest

# provides types for Jest globals without a need to import them.
# Also need to add "types": ["jest"] to tsconfig.json
npm i -D @types/jest

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
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
  ],
};
```

or babel.config.json

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "current"
        }
      }
    ],
    "@babel/preset-typescript"
  ]
}
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

testMatch: ["**/tests/**/*.spec.[jt]s?(x)", "**/__tests__/*.[jt]s?(x)", "**/*.spec.[jt]s?(x)"],

// For vue-test-utils to work with Jest 29
// https://test-utils.vuejs.org/migration/#test-runners-upgrade-notes
testEnvironmentOptions: {
  customExportConditions: ["node", "node-addons"],
},
```

## Troubleshooting

## Reference

https://jestjs.io/docs/getting-started

- Integrating Jest Testing into an Existing Vue 3 Project with ViteJs
  https://dev.to/integridsolutions/integrating-jest-testing-into-an-existing-vue-3-project-with-vitejs-3m13

- Vue Testing with Vue Test Utils
  https://www.youtube.com/watch?v=QIDhzBg5eWY&t=1361s
