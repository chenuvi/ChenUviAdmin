import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 全局完整注册 Antd
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

createApp(App).use(Antd).mount('#app')
