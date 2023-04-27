import { createApp } from 'vue'
import axios from 'axios'
import qs from 'qs'
// import App from './App.vue'
import App2 from './App2.vue'
//创建vue应用，挂载到app上（id=app的一个html标签上）
const app = createApp(App2)

//其他的操作

//导入组件
import GlobalCom from "./GlobComponent.vue"

//注册全局组件
app.component("GlobalCom",GlobalCom)
app.config.globalProperties.$axios = axios
app.config.globalProperties.$qs = qs

//挂载
app.mount('#app')
