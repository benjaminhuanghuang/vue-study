```js
// Collect code coverage
collectCoverage: true,
collectCoverageFrom: [
  "src/**/*.{js,vue}",
  "!src/main.js", // Exclude main.js
  "!src/router/index.js", // Exclude router
],
coverageDirectory: "<rootDir>/coverage",
```
