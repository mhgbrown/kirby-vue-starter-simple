import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Project from '@/components/Project'
import Projects from '@/components/Projects'

Vue.use(Router)

export default new Router({
  base: window.location.pathname !== '/' ? window.location.pathname.replace(/\/$/, '') : '/',
  mode: 'history',
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
      path: '/project/:uid',
      name: 'project',
      component: Project,
      props: true
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
