import { createI18n } from 'vue-i18n';
import en from './translations/en.json';
import zhCN from './translations/zh-CN.json';

// createInstance is a function for testing purpose
export const createInstance = () => {
  return createI18n({
    // Get default language from local storage then browser
    locale: localStorage.getItem('app-lang') || navigator.language || 'en',
    messages: {
      en,
      zhCN
    }
  });
};

export const i18n = createInstance();
