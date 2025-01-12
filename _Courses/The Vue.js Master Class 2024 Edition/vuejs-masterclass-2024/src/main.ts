import './assets/index.css'
import 'iconify-icon'
import { plugin, defaultConfig } from '@formkit/vue';
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(plugin, defaultConfig);
app.use(createPinia())
app.use(router)

app.mount('#app')
