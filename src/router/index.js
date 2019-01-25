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
      name: 'lottery',
      component: resolve => require(['@/pages/lottery'], resolve),
      redirect: '/draw/list',
      children: [
        {
          path: '/draw/list',
          name: 'lotteryList',
          component: resolve => require(['@/components/List'], resolve)
        },
        {
          path: '/draw/rule',
          name: 'lotteryRule',
          component: resolve => require(['@/components/Rule'], resolve)
        },
        {
          path: '/draw/award',
          name: 'lotteryAward',
          component: resolve => require(['@/components/Award'], resolve)
        }

      ]
    },
    {
      path: '/seckill',
      name: 'seckill',
      component: resolve => require(['@/pages/lottery'], resolve),
      redirect: '/seckill/list',
      children: [
        {
          path: '/seckill/list',
          name: 'seckillList',
          component: resolve => require(['@/components/List'], resolve)
        },
        {
          path: '/seckill/rule',
          name: 'seckillRule',
          component: resolve => require(['@/components/Rule'], resolve)
        },
        {
          path: '/seckill/award',
          name: 'seckillAward',
          component: resolve => require(['@/components/Award'], resolve)
        }

      ]
    }
  ]
})
