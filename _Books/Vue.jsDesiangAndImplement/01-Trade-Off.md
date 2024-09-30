

## Virtual DOM vs innerHTML
```js
const html = `
    <div><span>...</span><div>
    div.innerHtml = html
`
```
To render the page, string html should be parsed into a DOM tree.
Change text in the string html need to destroy all DOM tree and rebuild a new one.


