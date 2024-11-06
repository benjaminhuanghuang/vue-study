## Debug tests in chrome debugger
add script
```json
"test:unit:debug": "node --inspect-brk ./node_modules/jest/bin/jest.js --runInBand"
```
Open chrome, input address "chrome://inspect"
Click "inspect" beside the target 


## Use VS Code JavaScript Debug Terminal
Open the Terminal pane in VS Code (Ctrl + `).

Click on the dropdown arrow next to the "+" icon and select "JavaScript Debug Terminal".

The JavaScript Debug Terminal automatically attaches the debugger to any Node.js process you launch within it.