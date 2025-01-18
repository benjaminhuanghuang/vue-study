import { type ToDoItem } from '@/types';
import axios from 'axios';

export function useToDoList() {
  const fetchItems = async (): Promise<ToDoItem[]> => {
    const { data } = await axios.get<ToDoItem[]>('https://jsonplaceholder.typicode.com/todos');
    return data as ToDoItem[];
  };

  return {
    fetchItems
  };
}
