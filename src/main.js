// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import setRem from './assets/js/rem'
//import VueResource from 'vue-resource';
import store from './store/store'
import axios from 'axios'
import Loading from './components/loading'

//Vue.use(VueResource);
Vue.use(Loading);

require('./assets/css/style.css')

Vue.config.productionTip = false;

//axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的

axios.interceptors.request.use(function (config) {  //配置发送请求的信息
  store.dispatch('loadingShow')
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) { //配置请求回来的信息
  store.dispatch('loadingHide')
  return response;
}, function (error) {
  return Promise.reject(error);
});

Vue.prototype.$http = axios  //其他页面在使用axios的时候直接  this.$http就可以了
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  mounted () {
    setRem();
  }
})
