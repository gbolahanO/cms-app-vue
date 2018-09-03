// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import auth from './packages/auth/Auth'
import vueResource from 'vue-resource'
import VeeValidate from 'vee-validate'
import VueMoment from 'vue-moment'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(auth)
Vue.use(VeeValidate)
Vue.use(vueResource)
Vue.use(VueMoment)

axios.defaults.headers.common['Authoriztion'] = "Bearer " + Vue.auth.getToken()

// Vue.http.options.root = 'http://localhost:8000'
// Vue.http.headers.common['Authorization'] = 'Bearer ' + Vue.auth.getToken()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
