# Testing server-side rendering


```sh
npm install --save-dev @vue/server-test-utils
```

```js
import { renderToString } from '@vue/server-test-utils'
import Component from './Component.vue'

test('renders correctly on server ', () => {
    const str = renderToString(Component, {
        propsData: { msg: 'Hello, World!' }
    })
    expect(str).toContain('<p>Hello, World!</p>')
})
```