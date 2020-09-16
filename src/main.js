import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import '@/style/common.scss'
import '@/views/Nav.vue'
import ElementUI from 'element-ui';
// import {rq} from './api/System.js';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
// Vue.prototype.rq=rq;
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
