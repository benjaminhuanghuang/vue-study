# Vue test using Jest + Vue Test Utils
## Jest

For Vue3
```sh
npm i -D jest jest-environment-jsdom babel-jest @babel/preset-env @vue/vue3-jest
```
jest-environment-jsdom: Provides a browser-like environment for testing.
babel-jest: Transpiles your JavaScript code for Jest.
@vue/vue3-jest: A transformer to handle Vue single-file components in Jest.


For Vue2
```sh
npm i -D jest vue-jest
```

For typescript
```sh
npm i -D ts-jest @types/jest
```

Config jest by adding a jest.config.js file in the root of your project or by adding a jest section in your package.json.
```js
// Jest can simulate the DOM using jsdom
testEnvironment: "jsdom",

// Tells Jest to process .vue files using vue-jest
transform: {
"^.+\\.vue$": "@vue/vue3-jest",
"^.+\\js$": "babel-jest",
//"^.+\\.ts$": "ts-jest", // If you're using TypeScript
},

```

## Vue Test Utils: The official testing suite utils for Vue.js 3
Mounting components (mount, shallowMount)
Setting props data (setProps)
Finding HTML components for testing (findAll('h2'))
Utility for flushing all Promises (flushPromises())
Utility for triggering click events (trigger)
Utility for checking emitted events (emitted)

Vue Test Utils 1 targets Vue2.
Vue Test Utils 2 targets Vue3.

Install
```sh
npm i -D @vue/test-utils
```