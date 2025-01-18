import { createI18n } from 'vue-i18n';
import en from './en.json';
import zhCN from './zh-CN.json';

const i18n = createI18n({
  locale: 'en',
  messages: {
    en,
    zhCN
  }
});

export default i18n;
