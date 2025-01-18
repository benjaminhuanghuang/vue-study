import axios from 'axios';
import { i18n } from '@/locales';

export const signUp = (body: any) => {
  return axios.post('/api/v1/users', body, {
    headers: {
      'Accept-Language': i18n.global.locale
    }
  });
};
