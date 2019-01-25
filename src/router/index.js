import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/pintuan',
      name: 'index',
      component: resolve => require(['@/pages/index'], resolve)
    },
    {
      path: '/collect',
      name: 'wholesale',
      component: resolve => require(['@/pages/wholesale'], resolve)
    },
    {
      path: '/draw',
      name: 'draw',
      component: resolve => require(['@/pages/lottery'], resolve),
      redirect: '/draw/list',
      children: [
        {
          path: '/draw/list',
          component: resolve => require(['@/components/List'], resolve)
        },
        {
          path: '/draw/rule',
          component: resolve => require(['@/components/Rule'], resolve)
        },
        {
          path: '/draw/award',
          component: resolve => require(['@/components/Award'], resolve)
        }

      ]
    },
    {
      path: '/seckill',
      name: 'seckill',
      component: resolve => require(['@/pages/seckill'], resolve),
      redirect: '/seckill/list',
      children: [
        {
          path: '/seckill/list',
          component: resolve => require(['@/components/List'], resolve)
        },
        {
          path: '/seckill/rule',
          component: resolve => require(['@/components/Rule'], resolve)
        },
        {
          path: '/seckill/award',
          component: resolve => require(['@/components/Award'], resolve)
        }

      ]
    }
  ]
})
