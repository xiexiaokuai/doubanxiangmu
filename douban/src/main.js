// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
/*import jquery from 'jquery'*/
/*import './assets/bootstrap-3.3.7-dist/css/bootstrap.min.css'
import './assets/bootstrap-3.3.7-dist/js/bootstrap.min.js'*/


 import VueAxios from "vue-axios"
/*导入axios*/
import axios from 'axios'
axios.defaults.baseURL = "http://192.168.1.10:8080/doubandemo";
Vue.prototype.$axios = axios;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
import qs from 'qs';
Vue.prototype.qs = qs;
Vue.use(VueAxios,axios);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
  
})