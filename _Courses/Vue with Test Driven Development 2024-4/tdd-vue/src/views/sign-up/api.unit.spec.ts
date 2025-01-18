import { vi } from 'vitest';
import axios from 'axios';
// Component to test
import { signUp } from './api';

vi.mock('axios');
vi.mock('@/locales', () => ({
  i18n: {
    global: {
      locale: 'ab'
    }
  }
}));

describe('SignUp', () => {
  it('call axios with expected params', () => {
    const body = { key: 'value' };
    signUp(body);
    expect(axios.post).toHaveBeenCalledWith('/api/v1/users', body, {
      headers: {
        'Accept-Language': 'ab'
      }
    });
  });
});
