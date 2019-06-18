import Vue from 'vue'
import Router from 'vue-router'
import Page from './views/Page.vue'
import Home from './views/Home.vue'
import Projects from './views/Projects.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // so that routes are not based off 'publicPath' vue.config.js setting
  base: '/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '*',
      name: 'page',
      component: Page
    }
  ]
})
