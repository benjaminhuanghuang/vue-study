# Texting Vuex

## Design
The store will fetch and store items from the Hacker News API. 

Inside your application, you’ll dispatch a Vuex action that will call the Hacker News API and add the
returned items to the store. 
```js
dispatch('fetchListData', { type: 'top' })
```
Then the ItemList component will use the store data to render the items.


## 
Component dispatch a Vuex action that will call the API to get data and
use mutation to set data to the store. 

All the store parts are JavaScript functions, so the tests are relatively simple

## mutations
mutation test should always check that a state object was mutated correctly, because that’s the purpose of a mutation.

If your mutations don’t mutate the
state object, then you’re using them incorrectly.

```js
describe('mutations', () => {
    test('setItems sets state.items to items', () => {
        const items = [{id: 1}, {id: 2}]
        const state = {
        items: []
        }
        mutations.setItems(state, { items })
        expect(state.items).toBe(items)
    })
})
```

## getter
```js
test('inStockProducts returns products in stock', () => {
    const state = {
        products: [{stock: 2}, {stock: 0}, {stock: 3}]
    }
    const result = getters.inStockProducts()
    expect(result).toHaveLength(2)
})
```

## action
Actions give you the ability to commit mutations asynchronously. Often, actions
make API calls and commit the result.