import { mount, shallowMount } from '@vue/test-utils';
import App from '@/App.vue'; 
import About from '@/views/About.vue';

import router from '.';

describe('Router Tests', () => {
  it('should render About component for "/about" route', async () => {
    // Mount the app with the router
    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    });

    router.push('/about');
    await router.isReady();

    // Expect HomePage to be rendered
    expect(wrapper.findComponent(About).exists()).toBe(true);
  });


  it("render router-link", () => {
    const $route = {
      query: {}
    }
    const wrapper = shallowMount(App, {
      stubs: {
        RouterLink: RouterLinkStub
      },
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.findComponent(RouterLinkStub).props().to).toBe("/home")
  })
});
