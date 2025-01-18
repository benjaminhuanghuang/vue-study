import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { render, screen, waitFor } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
// Component to test
import AppInput from '../AppInput.vue';

describe('AppInput', () => {
  describe('when help is set', () => {
    it('has is-invalid class for input', () => {
      const { container } = render(AppInput, {
        props: {
          help: 'Error message'
        }
      });
      const input = container.querySelector('input');
      expect(input).toHaveClass('is-invalid');
    });

    it('has invalid-feedback for span', () => {
      const { container } = render(AppInput, {
        props: {
          help: 'Error message'
        }
      });
      const span = container.querySelector('span');
      expect(span).toHaveClass('invalid-feedback');
    });
  });

  describe('when help is not set', () => {
    it('does not has is-invalid for input', () => {
      const { container } = render(AppInput);
      const input = container.querySelector('input');
      expect(input).toHaveClass('is-invalid');
    });
  });
});
