
## Real DOM vs the Virtual DOM
```js
// Virtual DOM
const app =[];
for (let i =0; i< 10000; i++) {
    const div = {tag: 'div'};
    app.push(div);
}

// Real DOM
const app = document.querySelector('#app');
for (let i =0; i< 10000; i++) {
    const div = document.createElement('div');
    app.appendChild(div);
}
```

## Virtual DOM vs innerHTML
```js
const html = `
    <div><span>...</span><div>
    div.innerHtml = html
`
```
To render the page, string html should be parsed into a DOM tree.
Change text in the string html need to destroy all DOM tree and rebuild a new one.


