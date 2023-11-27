import './assets/main.sass'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
// import { createPopper } from '@popperjs/core';

const app = createApp(App)

// app.use(router)
app.use(router).use(vuetify).mount('#app')

// app.mount('#app')
