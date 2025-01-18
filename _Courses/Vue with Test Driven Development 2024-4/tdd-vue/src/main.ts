import { createApp } from 'vue';

import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router';
import { i18n } from './locales';

// Styles
import './assets/styles.scss';

createApp(App).use(createPinia()).use(router).use(i18n).mount('#app');
