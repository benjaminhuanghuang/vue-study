



Make sure a function is called. 
```js
// Just a sample of mock, DO NOT test component internal like this
jest.spyOn(wrapper.vm, 'increment').mockImplementation(()=>{});

findIncrementButton().trigger('click');

expect(wrapper.vm.increment).toHaveBeenCalled();
```

Mock the uuid library
```js
jest.mock('uuid/v4')
...
import uuidV4 from 'uuid'


uuidV4.mockImplementation(() => 23);

export(uuidV4).toHaveBeenCalled();
export(store.state.items[0]).toEqual({uuid: 23});
```