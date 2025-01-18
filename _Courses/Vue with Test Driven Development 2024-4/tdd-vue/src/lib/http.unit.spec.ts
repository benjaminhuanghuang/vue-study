import { vi } from 'vitest';

vi.mock('@/locales', () => ({
  i18n: {
    global: {
      locale: 'ab'
    }
  }
}));
import http from './http';

describe('http', () => {
  it('adds i18n locale to accept language header', () => {
    const requestConfig = {
      url: '/api/v1/users',
      method: 'get',
      Headers: {}
    };
    http.interceptors.request.handlers[0].fulfilled(requestConfig);
    expect(requestConfig.headers['Accept-Language']).toBe('ab');
  });
});
