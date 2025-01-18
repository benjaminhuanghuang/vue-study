import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// Component to test
import { useToDoList } from './useToDoList';

const axiosMock = new MockAdapter(axios);
axiosMock.onGet('https://jsonplaceholder.typicode.com/todos').reply(200, [
  { title: 'Learn Vue 1', id: 1, completed: false },
  { title: 'Learn Vue 2', id: 2, completed: false },
  { title: 'Learn Vue 3', id: 3, completed: false }
]);

describe('useToDoList', () => {
  test('fetches items', async () => {
    const { fetchItems } = useToDoList();

    const response = await fetchItems();
    expect(axiosMock.history.get.length).toBe(1);
    expect(axiosMock.history.get[0].url).toContain('todos');
    expect(response).toHaveLength(3);
  });
});
