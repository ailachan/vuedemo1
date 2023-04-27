import { createApp } from 'vue'
import App from './App.vue'
import {router} from "./route2" //导入

const app = createApp(App)


app.use(router) //应用路由


app.mount('#app')
