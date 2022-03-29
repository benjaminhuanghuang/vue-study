- Vue.js: Testing and Debugging [Linkedin]
  - https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-vue-applications?resume=false&u=2099546
  - https://github.com/LinkedInLearning/vue-js-testing-and-debugging-2399300



## Tools
- Testing library
  Mocha.js, Jest

- Assertion Library
  Chai.js, Just 

- Test Runner
  Karma, Jest
 
- Mock
  Sinon.js, Jest

- Coverage
  lstanbul.js, Jest


## Test string, number, object, array, anyc call


## Vue Testing tools
```
  npm i -D @vue/test-utils vue-jest @testing-libaray/vue
```

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

- Mount component

- 