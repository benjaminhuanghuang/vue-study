import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/vue';
// Component to test
import SignUp from './SignUp.vue';

describe('SignUp', () => {
  it('has Signup header', () => {
    render(SignUp);
    const header = screen.getByRole('heading', { name: 'Sign Up' });
    expect(header).toBeInTheDocument();
  });
});
