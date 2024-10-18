# Testing Vue.js Application Demo application
Vue3 + Vite + Vuex + Jest + JS


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

Add script
```json
    "test:unit": "jest -w"
```