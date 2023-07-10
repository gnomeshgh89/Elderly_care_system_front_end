import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Message } from 'element-ui';
import axios from "axios";

Vue.config.productionTip = false
Vue.prototype.$message = Message;
Vue.use(ElementUI,{size:'small'});//small medium mini

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


// const app = createApp(App);
// // app.config.globalProperties.axios = axios;
// app
//     .use(ElementUI)
//     .use(router)
//     .mount('#app');

