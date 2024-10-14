# Test Driven Development in Vue with Cypress by Josh Justice

https://www.youtube.com/watch?v=MU7K_V6rFjM

Vue3 + Vite + Cypress TDD

## Setup
```sh
npm create vite


npm i -D cypress

```

Create cypress.config.js


Add test script
``
 "test:e2e": "start-server-and-test preview http://localhost:4173 'cypress run --e2e'",
    "test:e2e:dev": "start-server-and-test 'vite dev --port 4173' http://localhost:4173 'cypress open --e2e'",
```
