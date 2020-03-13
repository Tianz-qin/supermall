import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";

import toast from "components/common/toast";

import FastClick from 'fastclick'
import VueLazyload from "vue-lazyload";

//消除移动端300毫秒点击延迟
FastClick.attach(document.body)

Vue.config.productionTip = false
//安装toast插件
Vue.use(toast)

//使用懒加载的插件
Vue.use(VueLazyload, {
  loading:require('./assets/img/common/placeholder.png')
})

//作为事件总线
Vue.prototype.$bus = new Vue();

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
