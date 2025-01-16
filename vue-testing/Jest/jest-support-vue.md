# Jest support Vue

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

// Fix error jest ReferenceError: Vue is not defined
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
