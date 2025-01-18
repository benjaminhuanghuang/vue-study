import { vi } from 'vitest';
import http from '@/lib/http';
// Component to test
import { signUp } from './api';

vi.mock('@/lib/http');

describe('SignUp', () => {
  it('call axios with expected params', () => {
    const body = { key: 'value' };
    signUp(body);
    expect(http.post).toHaveBeenCalledWith('/api/v1/users', body);
  });
});
