# Testing Vue Router

- Writing unit tests for components that use Vue Router properties
- Writing unit tests for the RouterLink component
- Using Vue Router properties in a Vuex store

## $route, $router

Vue Router adds two `read-only` `instance properties` when you install it on Vue: $route and $router

$route contains information about the currently matched route, which includes any router parameters from dynamic segments.
write tests for is the $route property, to render different content

$router, which is the `router instance` that you pass to Vue in the entry file. The $router instance includes methods for controlling Vue Router.

## Test $route

$route is a dependency of the component, need to mock the dependencies to prevent errors.

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

## Test $router

```ts
test('calls $router.replace when the page parameter is greater than the max page count', async () => {
    expect.assertions(1)
    const store = createStore({
        getters: {
            maxPage: () => 5
        }
    })
    const mocks = {
        $route: {
            params: {
            page: '1000'   // page is larger than the max page
        }
        },
        $router: {
            replace: jest.fn()
        }
    }
    createWrapper({ mocks, store })
    await flushPromises()
    expect(mocks.$router.replace).toHaveBeenCalledWith('/top/1')
})
```

## Test RouterLink

