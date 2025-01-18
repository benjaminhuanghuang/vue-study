import { flushPromises, shallowMount, VueWrapper } from '@vue/test-utils';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// Component to test
import ToDoList from '@/components/ToDoList.vue';

const axiosMock = new MockAdapter(axios);
axiosMock.onGet('https://jsonplaceholder.typicode.com/todos').reply(200, [
  { title: 'Learn Vue 1', id: 1, completed: false },
  { title: 'Learn Vue 2', id: 2, completed: false },
  { title: 'Learn Vue 3', id: 3, completed: false }
]);

describe('ToDoList.vue', () => {
  let wrapper: VueWrapper<InstanceType<typeof ToDoList>>;

  beforeEach(() => {
    wrapper = shallowMount(ToDoList);
  });

  test('fetches items and displays them', async () => {
    await flushPromises();
    // ensure API call is made
    expect(axiosMock.history.get.length).toBe(1);
    expect(wrapper.findAll('[data-test="todo-item"]').length).toBe(3);
  });
});
