

Install 

package.json Script
```json
    "format": "prettier --write src/"
```


.prettierrc.json
```json
{
    "$schema": "https://json.schemastore.org/prettierre",
    "semi": false,
    "tabWidth": 2,
    "singleQuote": true,
    "printWidth": 100,
    "trailingComma": "none"
}
```

Install prettier VS Code extension

settings.json
```json
    "editor. formatOnSave": true,
    "editor.defaultFormatter"; "esbenp. prettier-vscode"
```