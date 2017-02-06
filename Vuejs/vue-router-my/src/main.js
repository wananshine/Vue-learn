// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
// import BtmNavBar from './components/Btmnavbar.vue'

// Vue.component('btmnavbar', BtmNavBar);

Vue.use(VueResource)

/* eslint-disable no-new */




new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
