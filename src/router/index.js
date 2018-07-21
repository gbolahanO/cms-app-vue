import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/authentication/Login'
import Dashboard from '@/components/Dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})
