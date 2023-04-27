import { createApp } from 'vue'
import axios from 'axios'
import qs from 'qs'
import App3 from './App3.vue'
import {store} from '@/store'
import {createPinia} from "pinia";

const app = createApp(App3)
const pinia = createPinia()

app.config.globalProperties.$axios = axios
app.config.globalProperties.$qs = qs
app.use(store)
app.use(pinia)
app.mount('#app')
