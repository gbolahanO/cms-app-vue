import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/authentication/Login'
import Dashboard from '@/components/Dashboard'
import Posts from '@/components/Posts'
import EditPost from '@/components/EditPost'

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
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: 'post/edit/:id',
      name: 'EditPost',
      component: EditPost
    }
  ]
})
