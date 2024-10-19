# Test component with Vuex




```js
// test/Counter.spec.js
import { mount } from '@vue/test-utils';
import { createStore } from 'vuex'; // Vuex 4 for Vue 3
import Counter from '@/components/Counter.vue';

describe('Counter.vue', () => {
  it('renders count from the store', () => {
    // Mock Vuex store
    const store = createStore({
      state: { count: 0 },
      mutations: { increment: (state) => state.count++ }
    });

    // Mount the component with the mocked store
    const wrapper = mount(Counter, {
      global: {
        plugins: [store] // Pass the store to the component
      }
    });

    // Check initial rendered count
    expect(wrapper.find('p').text()).toBe('0');

    // Simulate button click
    wrapper.find('button').trigger('click');

    // Check updated count after mutation
    expect(wrapper.find('p').text()).toBe('1');
  });

  it('dispatches increment action when button is clicked', () => {
    const mockStore = {
      state: { count: 5 },
      commit: jest.fn()     // Mock the commit function
    };

    const wrapper = mount(Counter, {
      global: {
        mocks: {
          $store: mockStore
        }
      }
    });

    // Check that the count is rendered correctly
    expect(wrapper.find('p').text()).toBe('5');

    // Simulate button click
    wrapper.find('button').trigger('click');

    // Ensure the commit was called
    expect(mockStore.commit).toHaveBeenCalledWith('increment');
  });
});
```