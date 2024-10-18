import { createApp } from 'vue'
import './styles/base.css'
import './styles/index.css'
import App from './App.vue'
import { createPinia } from 'pinia'

createApp(App).use(createPinia()).mount('#app')
