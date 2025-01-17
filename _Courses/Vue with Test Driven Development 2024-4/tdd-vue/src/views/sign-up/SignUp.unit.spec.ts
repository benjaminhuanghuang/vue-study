import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
// vi.mock('axios');
// import axios from 'axios';
import { HttpResponse, http } from 'msw';
import { setupServer } from 'msw/node';

// Component to test
import SignUp from './SignUp.vue';

describe('SignUp', () => {
  describe('when user submit form', () => {
    it('sends username, email, password to backend', async () => {
      let requestBody: any;
      const server = setupServer(
        http.post('/api/v1/users', async ({ request }) => {
          requestBody = await request.json();
          return HttpResponse.json({});
        })
      );
      server.listen();

      const user = userEvent.setup();
      render(SignUp);

      const usernameInput = screen.getByLabelText('Username');
      const emailInput = screen.getByLabelText('E-mail');
      const passwordInput = screen.getByLabelText('Password');
      const passwordRepeatInput = screen.getByLabelText('Password Repeat');

      await user.type(usernameInput, 'user1');
      await user.type(emailInput, 'user1@gmail.com');
      await user.type(passwordInput, '12345');
      await user.type(passwordRepeatInput, '12345');

      const button = screen.getByRole('button', { name: 'Sign Up' });
      await user.click(button);
      await waitFor(() => {
        expect(requestBody).toEqual({
          username: 'user1',
          email: 'user1@gmail.com',
          password: '12345'
        });
      });
    });
  });
});
