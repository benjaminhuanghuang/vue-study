

## createLocalVue
In Vue 2, you needed createLocalVue to create a local instance for each test, but Vue 3 already isolates the component scope and dependencies during testing.
```ts
import { mount } from '@vue/test-utils';
import MyComponent from '@/components/MyComponent.vue';
import Vuex from 'vuex'; // Example plugin

const store = new Vuex.Store({ /* options */ });

const wrapper = mount(MyComponent, {
  global: {
    plugins: [store] // Install Vuex or other plugins directly
  }
});
```