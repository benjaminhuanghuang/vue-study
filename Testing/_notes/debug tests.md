## Debug tests in chrome debugger
add script
```json
"test:unit:debug": "node --inspect-brk ./node_modules/jest/bin/jest.js --runInBand"
```
Open chrome, input address "chrome://inspect"
Click "inspect" beside the target 

