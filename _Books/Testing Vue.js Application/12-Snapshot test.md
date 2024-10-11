# Writing snapshot tests

Snapshot testing is a way of comparing two pictures of an application automatically

Make sure components aren’t changed unintentionally


## Writing snapshot tests for static components

A static component is a component that always renders the same output. 
It doesn’t receive any props, and it doesn’t have any state.
```js
import { shallowMount } from '@vue/test-utils'
import Spinner from '../Spinner.vue'

describe('Spinner.vue', () => {
    test('renders correctly', () => {
        expect(shallowMount(Spinner).element).toMatchSnapshot()
    })
})
```

## Writing snapshot tests for dynamic components
```js
test('renders correctly', () => {
		//mock the Date.now method so that it always returns the same time, to
		// make your snapshot test deterministic.
    const dateNow = jest.spyOn(Date, 'now')
    const dateNowTime = new Date('2018')
    dateNow.mockImplementation(() => dateNowTime);
		
    const item = {
			by: 'eddyerburgh',
			id: 11122233,
			score: 10,
			time: (dateNowTime / 1000) - 600,
			title: 'vue-test-utils is released',
			type: 'story',
			url: 'https://vue-test-utils.vuejs.org/'
    }
    const wrapper = createWrapper(Item, {
			propsData: { 
				item
			}
    })
    dateNow.mockRestore()
    expect(wrapper.element).toMatchSnapshot()
})
```

Update snapshot
```sh
npm run test:unit -- --updateSnapshot

npm run test:unit -- -u
```

