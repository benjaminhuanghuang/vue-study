# Testing Vue Router
Vue Router adds two read-only instance properties when you install it on Vue: $route and $router

$route contains information about the currently matched route,
which includes any router parameters from dynamic segments. 

$router, which is the router instance that you pass to Vue in the entry file. 
The $router instance includes methods for controlling Vue Router. 


## Mock $route
```js
test('renders id param', () => {
    const wrapper = shallowMount(TestComponent, {
        mocks: {
            $route: {
                params: {
                id: 123
            }
            }
        }
    })
    expect(wrapper.text()).toContain('123')
})
```