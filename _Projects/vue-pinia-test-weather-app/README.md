# Vue Weather app Pinia Test

https://testdriven.io/blog/vue-pinia-testing/
https://testdriven.io/blog/vue-unit-testing/

https://gitlab.com/patkennedy79/vue-weather-app

## setup

```sh
    npm create vite

    npm i pinia axios
    npm i vitest @vue/test-utils jsdom -D
    npm i axios-mock-adapter @pinia/testing -D
```

script

```json
"test:unit": "vitest run --environment jsdom",
"test:coverage": "vitest run --environment jsdom --coverage",
"test:ui": "vitest --environment jsdom --coverage --ui",
```