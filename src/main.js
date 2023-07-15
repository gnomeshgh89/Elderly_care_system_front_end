import Vue from 'vue'
import Vuex from 'vuex'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Message } from 'element-ui';
import axios from "axios";
import store from "@/store";

Vue.config.productionTip = false
Vue.prototype.$message = Message;
Vue.prototype.$axios = axios
Vue.use(ElementUI,{size:'small'});//small medium mini

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')


// const app = createApp(App);
// // app.config.globalProperties.axios = axios;
// app
//     .use(ElementUI)
//     .use(router)
//     .mount('#app');

