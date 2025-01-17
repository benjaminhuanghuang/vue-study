/*
    In unit-tests, we mock the axios library to prevent the actual API call.
*/
import { vi, describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
vi.mock('axios');
import axios from 'axios';

// Component to test
import SignUp from './SignUp.vue';

beforeEach(() => {
  // clear all mock history
  vi.clearAllMocks();
});

const setup = async () => {
  const user = userEvent.setup();
  const result = render(SignUp);

  const usernameInput = screen.getByLabelText('Username');
  const emailInput = screen.getByLabelText('E-mail');
  const passwordInput = screen.getByLabelText('Password');
  const passwordRepeatInput = screen.getByLabelText('Password Repeat');

  await user.type(usernameInput, 'user1');
  await user.type(emailInput, 'user1@gmail.com');
  await user.type(passwordInput, '12345');
  await user.type(passwordRepeatInput, '12345');

  const button = screen.getByRole('button', { name: 'Sign Up' });
  return {
    ...result,
    user,
    elements: {
      button
    }
  };
};
describe('SignUp', () => {
  describe('when user submit form', () => {
    it('sends username, email, password to backend', async () => {
      const {
        user,
        elements: { button }
      } = await setup();

      await user.click(button);

      expect(axios.post).toHaveBeenCalledWith('/api/signup', {
        username: 'user1',
        email: 'user1@mail.com',
        password: '12345'
      });
    });
  });

  describe('when user there is an ongoing api call', () => {
    it('does not allow click button', async () => {
      const {
        user,
        elements: { button }
      } = await setup();

      await user.click(button);
      await user.click(button);

      expect(axios.post).toHaveBeenCalledTimes(1);
    });
  });
});
