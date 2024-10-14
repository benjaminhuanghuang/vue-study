# Create your first test


## Setup jest
```setup
npm i -D jest jest-environment-jsdom babel-jest @babel/preset-env @vue/vue3-jest
```

babel-jest compiles modern JavaScript (spec.js or helper.js) into JavaScript that can run in Node
vue-jest compiles SFCs(.vue) into JavaScript.

jest.config.js
```js
 transform: {
    "^.+\\.vue$": "@vue/vue3-jest",
    "^.+\\js$": "babel-jest",
  },
```

Vue component, it’s just an object (or function) with a render function and some properties.

## Folder structure
src
  api
  components
  views  : top-level component, used with vue router



##  Vue test API
```js
import Item from '../Item.vue'
import Vue from 'vue'

describe('Item.vue', () => {
    test('renders "item"', () => {
        const Ctor = Vue.extend(Item);  // create a constructor 
        const vm = new Ctor().$mount();  // create a Vue instance and mount it, create DOM elements
        expect(vm.$el.textContent).toContain('item'); // $el is the DOM elements 
    })
})
```

## Use Vue test utils
```sh
npm i -D @vue/test-utils
```

```js
test('renders item', () => {
    const wrapper = mount(Item)
    expect(wrapper.text()).toContain('item')
})
```
The wrapper returned by mount doesn’t just contain the Vue instance; it
also includes helper methods that you can use to set props, check instance properties,
and perform actions on the instance.

## mount() with shallowMount()
shallowMount() do not render the entire component tree like mount()

The difference is that shallowMount stubs all the children of a component before it mounts it


## Chrome debugger
add script
```json
"test:unit:debug": "node --inspect-brk ./node_modules/jest/bin/jest.js --runInBand"
```
Open chrome, input address "chrome://inspect"
Click "inspect" beside the target 