import './assets/index.css'
import 'iconify-icon'
import { plugin, defaultConfig } from '@formkit/vue';
import config from '../formkit.config';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createMetaManager } from 'vue-meta';

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(plugin, config || defaultConfig);
app.use(createPinia())
app.use(router)
app.use(createMetaManager())

app.mount('#app')
