// Wrap and customize the functions in @testing-library/vue
import { render } from '@testing-library/vue';
import { i18n } from '@/locales';
import userEvent from '@testing-library/user-event';

const customRender = (component: any, options?: any) => {
  const user = userEvent.setup();
  const result = render(component, {
    global: {
      plugins: [i18n]
    },
    ...options
  });
  return { ...result, user };
};

export * from '@testing-library/vue';
export { customRender as render }; // replace render with customRender
