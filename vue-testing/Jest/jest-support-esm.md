# Jest support ESM

## Support ESM (import syntax)

Jest is running in node environment, which does not support ESM
To solve this issue, we need to use babel convert ESM code

create babel.config.js or babel.config.json

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "current"
        }
      }
    ]
  ]
}
```

Add install

```sh
npm i -D babel-jest @babel/preset-env
```

## Support ESM (import syntax) method 2

Run jest with a node variable

```json
"test:unit": "NODE_OPTIONS=--experimental-vm-modules jest"
```
