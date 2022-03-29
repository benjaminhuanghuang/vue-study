  ## Vue Testing tools
```
  npm i -D @vue/test-utils vue-jest @testing-libaray/vue
```
- @vue/test-utils 是Vue 组件单元测试的官方库

- @testing-library/vue 
(https://testing-library.com/docs/vue-testing-library/intro/)
It is built on top of @vue/test-utils, the official testing library for Vue.



jest.config.js 
Tell jest work with vue

```
  module.exports =  {
    "moduleFileExtensions": [
        "js",
        "json",
        // tell Jest to handle `*.vue` files
        "vue"
    ],
    "transform": {
        ".*\\.(js)$": "babel-jest",
        // process `*.vue` files with `vue-jest`
        ".*\\.(vue)$": "vue-jest"
    },
    "testEnvironment": "jsdom"
  }
```