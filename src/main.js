import './assets/main.sass'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import { createPopper } from '@popperjs/core';

const app = createApp(App)

app.use(router)


app.mount('#app')
