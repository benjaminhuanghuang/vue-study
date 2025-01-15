/*
https://codingpr.com/test-your-vue-3-app-with-vitest-and-vue-test-utils/
*/
import { mount } from '@vue/test-utils';
import TheWelcomeVue from './TheWelcome.vue';

describe('The Welcome', () => {
  it('Mounts properly', async () => {
    const wrapper = mount(TheWelcomeVue);

    // component is mounted
    expect(wrapper).toBeTruthy();
    expect(wrapper.text()).toContain('Documentation');

    // svg is rendered
    const svg = wrapper.find('svg');
    expect(svg).toBeTruthy();

    // a tag is rendered
    const a = wrapper.find('a');
    const spyOnA = vi.spyOn(a, 'trigger');
    await a.trigger('click');
    expect(spyOnA).toHaveBeenCalledOnce();
  });
});
