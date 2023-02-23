import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import WujieVue  from 'wujie-vue3'

const app = createApp(App)

app.use(WujieVue)

app.use(router)

app.mount('#app')
