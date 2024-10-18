# Test Vuex

Component dispatch a Vuex action that will call the API to get data and
use mutation to set data to the store. 

All the store parts are JavaScript functions, so the tests are relatively simple


## What needs to be tested


## Reference
https://test-utils.vuejs.org/guide/advanced/vuex.html


# Testing Vuex Official doc
https://test-utils.vuejs.org/guide/advanced/vuex


Vuex is a plugin. It is applied to application like
```js
const app = createApp(App)
app.use(store)
```

## integration test (Component + store)

Vue Test Utils provide the global.plugins mounting option to apply the Vuex

```js
test('vuex', async () => {
  const wrapper = mount(App, {
    global: {
      plugins: [store]
    }
  })

  await wrapper.find('button').trigger('click')

  expect(wrapper.html()).toContain('Count: 1')
})
```

## Testing with a mock store
A unit test might isolate and test the component and the store separately. This can be useful if you have a very large application with a complex store. 

We created our own mock store, only implementing the parts of Vuex used in the component
Vue Test Utils provides global.mocks to use a mock store
```js
test('vuex using a mock store', async () => {
  const $store = {
    state: {
      count: 25
    },
    commit: jest.fn()
  }

  const wrapper = mount(App, {
    global: {
      mocks: {
        $store
      }
    }
  })

  expect(wrapper.html()).toContain('Count: 25')
  await wrapper.find('button').trigger('click')
  expect($store.commit).toHaveBeenCalled()
})
```

## Testing Vuex mutation or actions
You don't need Vue Test Utils for this, since a Vuex store is just regular JavaScript
```js
test('increment mutation', () => {
  const store = createStore({
    state: {
      count: 0
    },
    mutations: {
      increment(state) {
        state.count += 1
      }
    }
  })

  store.commit('increment')

  expect(store.state.count).toBe(1)
})
```

## Presetting the Vuex State
By creating a createVuexStore function that takes an initial state, we can easily set the initial state. 
This allows us to test all of the edge cases, while simplifying our tests.


## Testing using the Composition API
Vuex is accessed via a useStore function when using the Composition API.
