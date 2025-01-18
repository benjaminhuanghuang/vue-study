/*
    In unit-tests, we mock the axios library to prevent the actual API call.
*/
import { vi, describe, it, expect, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/vue';
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
      button,
      usernameInput,
      emailInput,
      passwordInput,
      passwordRepeatInput
    }
  };
};
describe('SignUp', () => {
  describe('when user set same value for password inputs', () => {
    describe('when user submit form', () => {
      it('sends username, email, password to backend', async () => {
        (axios.post as jest.MockedFunction<typeof axios.post>).mockResolvedValue({
          data: { message: 'User created successfully' }
        });
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
        (axios.post as jest.MockedFunction<typeof axios.post>).mockImplementation(
          () =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve({ data: { message: 'User created successfully' } });
              }, 1000);
            })
        );

        const {
          user,
          elements: { button }
        } = await setup();

        await user.click(button);
        await user.click(button);

        expect(axios.post).toHaveBeenCalledTimes(1);
      });

      it('display spinner', async () => {
        server.use(
          http.post('/api/v1/users', async () => {
            await delay('infinite');
            return HttpResponse.json({ message: 'User created successfully' });
          })
        );
        const {
          user,
          elements: { button }
        } = await setup();

        await user.click(button);
        expect(screen.getByRole('status')).toBeInTheDocument();
      });
    });

    describe('when success response is received', () => {
      beforeEach(() => {
        (axios.post as jest.MockedFunction<typeof axios.post>).mockResolvedValue({
          data: { message: 'User created successfully' }
        });
      });

      it('display message received from backend', async () => {
        const {
          user,
          elements: { button }
        } = await setup();

        await user.click(button);
        const text = await screen.findByText('User created successfully');
        expect(text).toBeInTheDocument();
      });
      describe('when use submits again', () => {
        it('hides error when api request is progress', async () => {
          (axios.post as jest.MockedFunction<typeof axios.post>).mockResolvedValue({
            data: {}
          });
          const {
            user,
            elements: { button }
          } = await setup();

          await user.click(button);
          const text = await screen.findByText('Unexpected error occurred, please try again.');
          await user.click(button);
          await waitFor(() => {
            expect(text).toBeInTheDocument();
          });
        });
      });

      describe('when use username is invalid', () => {
        it('displays validation error', async () => {
          (axios.post as jest.MockedFunction<typeof axios.post>).mockRejectedValue({
            response: {
              status: 400,
              data: {
                validationErrors: { username: 'Username cannot be null' }
              }
            }
          });
          const {
            user,
            elements: { button }
          } = await setup();

          await user.click(button);

          const error = await screen.findByText('Username cannot be null');
          expect(error).toBeInTheDocument();
        });
      });
    });
  });

  describe.each([
    {
      field: 'username',
      message: 'Username cannot be null'
    },
    {
      field: 'password',
      message: 'Password cannot be null'
    }
  ])(`when $field is invalid`, ({ field, message }) => {
    it(`displays ${message}`, async () => {
      (axios.post as jest.MockedFunction<typeof axios.post>).mockRejectedValue({
        response: {
          status: 400,
          data: {
            validationErrors: { [field]: message }
          }
        }
      });
      const {
        user,
        elements: { button }
      } = await setup();

      await user.click(button); // trigger error
      const error = await screen.findByText(message);
      expect(error).toBeInTheDocument();
    });

    it(`clear error after user updates ${field}`, async () => {
      (axios.post as jest.MockedFunction<typeof axios.post>).mockRejectedValue({
        response: {
          status: 400,
          data: {
            validationErrors: { [field]: message }
          }
        }
      });
      const {
        user,
        elements
      }: { user: ReturnType<typeof userEvent.setup>; elements: { [key: string]: HTMLElement } } =
        await setup();

      await user.click(elements.button); // trigger error
      const error = await screen.findByText(message);
      await user.type(elements[`${field}Input`], 'updated');
      expect(error).not.toBeInTheDocument();
    });
  });
});
