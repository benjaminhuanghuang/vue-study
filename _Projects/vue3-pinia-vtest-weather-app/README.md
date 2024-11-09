# Vue Weather app Pinia Test

https://testdriven.io/blog/vue-pinia-testing/
https://testdriven.io/blog/vue-unit-testing/

https://gitlab.com/patkennedy79/vue-weather-app

## setup

```sh
    npm create vite

    npm i pinia axios
    npm i vitest @vue/test-utils jsdom -D
    npm i axios-mock-adapter @pinia/testing -D
```

script

```json
"test:unit": "vitest run --environment jsdom",
"test:coverage": "vitest run --environment jsdom --coverage",
"test:ui": "vitest --environment jsdom --coverage --ui",
```

## pass pops and check rendered

'renders message when component is created'

'initializes with correct elements'

```js
wrapper = shallowMount(WeatherResult, {
    propsData: {
        ...
    }
});

expect(wrapper.text()).not.toMatch('Node Project');
expect(wrapper.findAll('h2').length).toEqual(2);
```

## set props and check rendered result

'processes valid props data'

```js
wrapper.setProps({});
// Wait until the DOM updates
await flushPromises();
```

## Test user input

'emits a custom event when the Clear Weather Data button is clicked'

```js
 wrapper.findAll('button').at(0).trigger('click')
```

## Mock API call

'does load the weather data when a successful HTTP GET occurs'

```js
import axios from 'axios'    // Import libraries to mock

// Mock the axios library
vi.mock("axios", () => {
  return {
    default: {
      get: vi.fn(),
    },
  };
});

beforeEach(() => {
  // Set the mock call to GET to return a failed GET request
  axios.get.mockRejectedValue(new Error('BAD REQUEST'))

  // Set the mock call to GET to return a successful GET response
    const responseGet = { 
        data: {
            name: 'Chicago',
            weather: [
            {
                main: 'Cloudy',
                description: 'Cloudy with a chance of rain'
            }
            ],
            main: {
            temp: 56.3,
            temp_min: 53.8,
            temp_max: 58.6
            }
        }
    }
  axios.get.mockResolvedValue(responseGet)


  // Render the component
  wrapper = shallowMount(App)
})

afterEach(() => {
    axios.get.mockReset()
})

it('does load the weather data when a successful HTTP GET occurs', async () => {
  wrapper.vm.searchCity('Chicago')   // submit search

  // Wait until the DOM updates
  await flushPromises()

  expect(axios.get).toHaveBeenCalledTimes(1)
  expect(axios.get).toBeCalledWith(expect.stringMatching(/Chicago/))

})
```
