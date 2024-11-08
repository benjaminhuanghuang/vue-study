# Testing Vue.js Application Demo application
Vue3 + Composition API + Vite + Vuex + Jest + JS


## Setup
```sh
npm create vite

cd vue-hackerNews

npm i Vuex 
npm i firebase # Firebase is used to access the Hacker News API
npm i -D jest jest-environment-jsdom babel-jest @babel/preset-env @vue/vue3-jest
npm i -D @vue/test-utils
```

babel.config.json

jest.config.js
```js
  // Tells Jest to process .vue files using vue-jest
  transform: {
    "^.+\\.vue$": "@vue/vue3-jest",
    "^.+\\js$": "babel-jest",
    //"^.+\\.ts$": "ts-jest", // If you're using TypeScript
  },
  // Specify where to look for test files
  testMatch: ["**/tests/**/*.spec.[jt]s?(x)", "**/*.spec.[jt]s?(x)", ],
```

Add script
```json
    "test:unit": "jest -w"
```