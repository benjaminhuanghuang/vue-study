# Vue 3 + Vite + Jest + Vue/test-utils + JS project setup

Create project

```sh
npm init vite@latest
    vue
    javascript
```

## Setup Jest for Vue3

```sh
npm i -D jest
```

## Support ESM (import syntax)

Jest is running in node environment, which does not support ESM
To solve this issue, we need to use babel convert ESM code

create babel.config.js or babel.config.json

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
    ]
  ]
}
```

Add install

```sh
npm i -D babel-jest @babel/preset-env
```

## Support ESM (import syntax) method 2

Run jest with a node variable

```json
"test:unit": "NODE_OPTIONS=--experimental-vm-modules jest"
```

## Support vue

Install dependencies

```sh
npm i -D @vue/vue3-jest @vitejs/plugin-vue jest-environment-jsdom
```

Create jest.config.js file

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
```

## Troubleshooting

## Reference

https://jestjs.io/docs/getting-started

- Integrating Jest Testing into an Existing Vue 3 Project with ViteJs
  https://dev.to/integridsolutions/integrating-jest-testing-into-an-existing-vue-3-project-with-vitejs-3m13

- Vue Testing with Vue Test Utils
  https://www.youtube.com/watch?v=QIDhzBg5eWY&t=1361s
