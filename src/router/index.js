import Vue from 'vue'
import Router from 'vue-router'
import VueMeta from 'vue-meta'
import Home from '@views/Home.vue'
import About from '@views/About.vue'

Vue.use(Router)
Vue.use(VueMeta, {
  keyName: 'head' // the component option name that vue-meta looks for meta info on.
})

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      component: About
    }
  ]
})
