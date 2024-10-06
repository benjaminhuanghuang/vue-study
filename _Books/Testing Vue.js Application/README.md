# Testing Vue.js Applications
by Edd Yerburgh, 2018



https://www.manning.com/books/testing-vue-js-applications


## Setup
I migrated the vue-hackerNews project to Vite + Vue3 + Vuex + Jest + 

```sh
npm create vite

cd vue-hackerNews
npm i Vuex 
npm i -D jest jest-environment-jsdom babel-jest @babel/preset-env @vue/vue3-jest
npm i -D @vue/test-utils
```

babel.config.js

jest.config.js

Add script
```json
    "test:unit": "jest -w"
```