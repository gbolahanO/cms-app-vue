import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/authentication/Login'
import Dashboard from '@/components/Dashboard'
import Posts from '@/components/Posts'
import EditPost from '@/components/EditPost'
import CreatePost from '@/components/CreatePost'
import Categories from '@/components/Categories'
import EditCategory from '@/components/EditCategory'
import CreateCategory from '@/components/CreateCategory'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
      path: '/post/edit/:id',
      name: 'EditPost',
      component: EditPost
    },
    {
      path: '/post/create',
      name: 'CreatePost',
      component: CreatePost
    },
    {
      path: '/categories',
      name: 'Categories',
      component: Categories
    },
    {
      path: '/category/edit/:id',
      name: 'EditCategory',
      component: EditCategory
    },
    {
      path: '/category/create',
      name: 'CreateCategory',
      component: CreateCategory
    }
  ],
})
