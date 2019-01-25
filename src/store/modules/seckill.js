
const state = {
  seckill: [
    {
      date: '3月9日',
      time: '18:00',
      percent: '20%',
      datetime: '2019-03-09 18',
      on: true
    },
    {
      date: '3月10日',
      time: '18:00',
      percent: '60%',
      datetime: '2019-03-10 18',
      on: false
    }
  ],
  path: [
    {
      link: '/seckill/list',
      imgUrl: require('@/assets/images/list.png'),
      name: '中奖名单'
    },
    {
      link: '/seckill/rule',
      imgUrl: require('@/assets/images/attention.png'),
      name: '抽奖规则'
    },
    {
      link: '/seckill/award',
      imgUrl: require('@/assets/images/gift.png'),
      name: '奖项设置'
    }
  ]
}

const mutations = {
}

const actions = {

}

const getters = {

}

export default {
  state,
  getters,
  actions,
  mutations
}