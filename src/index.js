import './index.html'
import 'normalize.css'
import './index.scss'
import App from './App.vue'
import { createApp } from 'vue'
import store from './store'
import router from './router'

createApp(App).use(router).use(store).mount('#app')
