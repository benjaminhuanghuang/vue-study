测试不通过就阻止代码git提交

## Setup
```
cnpm i husky –save
```


```
"husky": {
    "hooks": {
      "pre-commit": "npm run test:unit"
    }
}
```