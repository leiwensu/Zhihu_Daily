// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import setRem from './assets/js/rem'
import VueResource from 'vue-resource';
import store from './store/store'
Vue.use(VueResource);

require('./assets/css/style.css')

Vue.config.productionTip = false

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
