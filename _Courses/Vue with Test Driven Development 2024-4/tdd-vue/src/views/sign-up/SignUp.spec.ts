import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';

// Component to test
import SignUp from './SignUp.vue';

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
      const user = userEvent.setup();
      render(SignUp);

      const passwordInput = screen.getByLabelText('password');
      const passwordRepeatInput = screen.getByLabelText('password Repeat');

      await user.type(passwordInput, '12345');
      await user.type(passwordRepeatInput, '12345');

      expect(screen.getByRole('button', { name: 'Sign Up' })).toBeEnabled();
    });
  });
});
