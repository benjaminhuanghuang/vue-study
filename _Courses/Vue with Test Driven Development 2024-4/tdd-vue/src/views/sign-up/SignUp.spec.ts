/*
  In integration tests, we use msw to mock the backend server and test the actual API call.
*/
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { render, screen, waitFor } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import { HttpResponse, http } from 'msw';
import { setupServer } from 'msw/node';

// Component to test
import SignUp from './SignUp.vue';
import { beforeEach } from 'node:test';

let requestBody: any;
let counter = 0;
const server = setupServer(
  http.post('/api/v1/users', async ({ request }) => {
    requestBody = await request.json();
    counter++;
    return HttpResponse.json({});
  })
);
beforeAll(() => server.listen());
afterAll(() => server.close());
beforeEach(() => {
  counter = 0;
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
  it('has Signup header', () => {
    render(SignUp);
    const header = screen.getByRole('heading', { name: 'Sign Up' });
    expect(header).toBeInTheDocument();
  });

  it('has username input', () => {
    render(SignUp);
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
  });
  it('has email input', () => {
    render(SignUp);
    expect(screen.getByLabelText('E-mail')).toBeInTheDocument();
  });

  it('has password input', () => {
    render(SignUp);
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
  });

  it('has password type for password input', () => {
    render(SignUp);
    expect(screen.getByLabelText('Password')).toHaveAttribute('type', 'password');
  });

  it('has password repeat input', () => {
    render(SignUp);
    expect(screen.getByLabelText('Password Repeat')).toBeInTheDocument();
  });

  it('has password type for password repeat input', () => {
    render(SignUp);
    expect(screen.getByLabelText('Password Repeat')).toHaveAttribute('type', 'password');
  });

  it('has Sign up button', () => {
    render(SignUp);
    const button = screen.getByRole('button', { name: 'Sign Up' });
    expect(button).toBeInTheDocument();
  });

  it('disable button initially', () => {
    render(SignUp);
    expect(screen.getByRole('button', { name: 'Sign Up' })).toBeDisabled();
  });

  describe('when user sets same value for password inputs', () => {
    it('enable button', async () => {
      const {
        elements: { button }
      } = await setup();
      expect(button).toBeEnabled();
    });
  });
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
      const {
        user,
        elements: { button }
      } = await setup();
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
  describe('when user there is an ongoing api call', () => {
    it('does not allow click button', async () => {
      const {
        user,
        elements: { button }
      } = await setup();

      await user.click(button);
      await user.click(button);

      await waitFor(() => {
        expect(counter).toBe(1);
      });
    });
  });
});
