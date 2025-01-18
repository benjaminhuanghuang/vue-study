/*
    Axios interceptor
*/
import axios from 'axios';
import { i18n } from '@/locales';

const http = axios.create();

http.interceptors.request.use((config) => {
  config.headers['Accept-Language'] = i18n.global.locale;
  return config;
});

export default http;
