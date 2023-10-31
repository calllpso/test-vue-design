import './assets/main.sass'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
const app = createApp(App)

app.config.isCustomElement = tag => tag === 'my_btn' || tag === 'Svg'

app.use(router)

app.mount('#app')
