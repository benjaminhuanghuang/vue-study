# Create vue project
```
    sudo npm i -g @vue/cli

    vue create <app>

    npm i -D @vue/cli-plugin-unit-jest @vue/test-utils vue-jest
```

## Vue 2.x
https://vue-test-utils.vuejs.org/

```


vue init webpack vue2-test
vue init webpack-simple vue2-test

npm i -D @vue/test-utils vue-jest
npm i -D jest-vue-preprocessor
```



## Vue 3.x
https://next.vue-test-utils.vuejs.org/guide/

```

```

## Coniguration
Jest config
```
    "testEnvironment": "jsdom"
```  

.babelrc
```
  "plugins": [
        ["@babel/transform-runtime"]
    ]
```

Append test:unit command to the end of scripts section in package.json:
```
"scripts": {
  ...
  "test:unit": "vue-cli-service test:unit"
},
```

Create jest.config.js file and add the following lines:
```
module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true
}
```

