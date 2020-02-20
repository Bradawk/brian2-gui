import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import NotFound from '../pages/NotFound.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    { path: '*',
      name: 'NotFound',
      component: NotFound 
    }
  ]
})
