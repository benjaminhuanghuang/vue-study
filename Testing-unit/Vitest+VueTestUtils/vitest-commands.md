

## package.json script
```json

"test:component": "vitest run ./src",

"test:component:coverage": "vitest run --coverage",

"test:application:vitest": "npx vitest run ./test/specs",

"test:application": "npm run test:application:vitest"


"test": "vitest"    # watch mode

"test": "vitest run"    # run once

"coverage": "vitest run --coverage"

```


```sh
npm run test:unit


vitest -environment json -root src/
```
