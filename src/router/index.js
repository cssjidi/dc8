import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/containers/Home'
import Page from '@/containers/Page'
import Multi from '@/containers/Multi'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/page',
      name: 'Page',
      component: Page
    },
    {
      path: '/multi',
      name: 'Multi',
      component: Multi
    }
  ]
})
