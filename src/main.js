import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/dist/index.css'
import App from './App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App)
app.use(ElementPlus,{locale:zhCn,})
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)}
app.mount('#app')
