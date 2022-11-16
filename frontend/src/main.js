import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './index.css'
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

const app = createApp(App);
app.use(router);
app.use(ToastPlugin);
app.mount('#app');