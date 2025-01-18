import { shallowMount, VueWrapper } from '@vue/test-utils';

// Component to test
import ToDoItem from '@/components/ToDoItem.vue';

describe('ToDoList.vue', () => {
  let wrapper: VueWrapper<InstanceType<typeof ToDoItem>>;

  beforeEach(() => {
    wrapper = shallowMount(ToDoItem, {
      props: {
        data: {
          id: 1,
          title: 'Learn Vue 1',
          completed: false
        }
      }
    });
  });

  test('display the given data', () => {
    expect(wrapper.text()).toContain('Learn Vue 1');
  });

  test('should emit and event on click', () => {
    wrapper.find('button').trigger('click');
    expect(wrapper.emitted('on-click')).toEqual([[1]]);
  });
});
