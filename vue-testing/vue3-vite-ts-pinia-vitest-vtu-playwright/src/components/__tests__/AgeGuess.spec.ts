import { test, expect } from 'vitest';
import { mount } from '@vue/test-utils';

// Component to test
import AgeGuess from '../AgeGuess.vue';

test('mount component', async () => {
  expect(AgeGuess).toBeTruthy();

  const wrapper = mount(AgeGuess, {
    props: {
      title: 'Guess User Age App'
    }
  });
  expect(wrapper.text()).toContain('Guess User Age App');
});
