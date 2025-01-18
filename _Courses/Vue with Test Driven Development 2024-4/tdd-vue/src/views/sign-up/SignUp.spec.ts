/*
  In integration tests, we use msw to mock the backend server behavior and test the actual API call.
*/
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { render, screen, waitFor } from 'test/helper';
import { HttpResponse, http, delay } from 'msw';
import { setupServer } from 'msw/node';

// Component to test
import SignUp from '@/views/sign-up/SignUp.vue';
import { beforeEach } from 'node:test';
import i18n from '@/locales/i18n';

let requestBody: any;
let counter = 0;
const server = setupServer(
  http.post('/api/v1/users', async ({ request }) => {
    requestBody = await request.json();
    counter++;
    // await delay(); // to match the test for displays spinner, but not recommended
    return HttpResponse.json({ message: 'User created successfully' });
  })
);
beforeAll(() => server.listen());
afterAll(() => server.close());
beforeEach(() => {
  counter = 0;
  server.resetHandlers(); // reset the settings in "displays spinner" test
});

afterEach(() => {
  i18n.global.locale = 'en';
});

const setup = async () => {
  const { user, result } = render(SignUp);

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
  it('has Signup header', () => {
    render(SignUp, {
      global: {
        plugins: [i18n]
      }
    });
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

  it('doest not display spinner', () => {
    render(SignUp);
    expect(screen.getByRole('status')).not.toBeInTheDocument();
  });

  describe('when passwords to not match', () => {
    it('displays error', async () => {
      const {
        user,
        elements: { passwordInput, passwordRepeatInput }
      } = await setup();

      await user.type(passwordInput, '123');
      await user.type(passwordRepeatInput, '456');
      expect(screen.getByText('Password mismatch')).toBeInTheDocument();
    });
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

    describe('when success response is received', () => {
      it('display message received from backend', async () => {
        const {
          user,
          elements: { button }
        } = await setup();

        await user.click(button);
        const text = await screen.findByText('User created successfully');
        expect(text).toBeInTheDocument();
      });

      it('hides sign up form', async () => {
        const {
          user,
          elements: { button }
        } = await setup();

        const form = screen.getByTestId('form-sign-up');
        await user.click(button);
        await waitFor(() => {
          expect(form).not.toBeInTheDocument();
        });
      });
    });

    describe('when network failure occurs', () => {
      it('display generic error message', async () => {
        server.use(
          http.post('/api/v1/users', async () => {
            return HttpResponse.error();
          })
        );
        const {
          user,
          elements: { button }
        } = await setup();

        await user.click(button);
        const text = await screen.findByText('Unexpected error occurred, please try again.');
        expect(text).toBeInTheDocument();
      });

      it('hides spinner', async () => {
        server.use(
          http.post('/api/v1/users', async () => {
            return HttpResponse.error();
          })
        );
        const {
          user,
          elements: { button }
        } = await setup();

        await user.click(button);

        await waitFor(() => {
          // hide t spinner
          expect(screen.getByRole('status')).not.toBeInTheDocument();
        });
      });
      it('when user submits again', () => {
        it('hides error when api request is progress', async () => {
          let processedFirstRequest = false;
          server.use(
            http.post('/api/v1/users', async () => {
              if (!processedFirstRequest) {
                processedFirstRequest = true;
                return HttpResponse.error();
              } else {
                return HttpResponse.json({
                  message: 'User created successfully'
                });
              }
            })
          );
          const {
            user,
            elements: { button }
          } = await setup();
          const text = await screen.findByText('Unexpected error occurred, please try again.');
          await user.click(button);
          await waitFor(() => {
            // hide t spinner
            expect(text).not.toBeInTheDocument();
          });
        });
      });
    });

    /*
      Repeat test using vitest describe.each 
    */
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
        server.use(
          http.post('/api/v1/users', () => {
            return HttpResponse.json(
              {
                validationError: {
                  [field]: message
                }
              },
              { status: 400 }
            );
          })
        );
        const {
          user,
          elements: { button }
        } = await setup();

        await user.click(button);

        const error = await screen.findByText(message);
        expect(error).toBeInTheDocument();
      });

      it(`clear error after user updates ${field}`, async () => {
        server.use(
          http.post('/api/v1/users', () => {
            return HttpResponse.json(
              {
                validationError: {
                  [field]: message
                }
              },
              { status: 400 }
            );
          })
        );
        const { user, elements } = await setup();

        await user.click(elements.button); // trigger error
        const error = await screen.findByText(message);

        //await user.type(elements[`${field}Input`], 'updated');
        expect(error).not.toBeInTheDocument();
      });
    });
  });
});
