import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/collect',
      name: 'index',
      component: resolve => require(['@/pages/index'], resolve)
    },
    {
      path: '/pintuan',
      name: 'wholesale',
      component: resolve => require(['@/pages/wholesale'], resolve)
    },
    {
      path: '/draw',
      name: 'draw',
      component: resolve => require(['@/pages/lottery'], resolve)
    },
    {
      path: '/seckill',
      name: 'seckill',
      component: resolve => require(['@/pages/seckill'], resolve)
    }
  ]
})
