import http from '@/lib/http';

export const activate = (token: string) => {
  return http.patch(`/api/v1/users/${token}/activate`);
};
