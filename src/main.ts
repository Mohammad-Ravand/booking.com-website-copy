import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { v4 as uuidv4 } from 'uuid';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(uuidv4)
app.mount('#app')
