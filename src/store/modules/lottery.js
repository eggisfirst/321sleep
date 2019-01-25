
const state = {
  lottery: [
    {
      date: '3月9日',
      time: '15:00',
      percent: '12.5%',
      datetime: '2019-03-09 15',
      on: true
    },
    {
      date: '3月9日',
      time: '17:00',
      percent: '37.5%',
      datetime: '2019-03-09 17',
      on: false
    },
    {
      date: '3月10日',
      time: '15:00',
      percent: '50%',
      datetime: '2019-03-10 15',
      on: false
    },
    {
      date: '3月10日',
      time: '17:00',
      percent: '62.5%',
      datetime: '2019-03-10 17',
      on: false
    }
  ],
  path: [
    {
      link: '/draw/list',
      imgUrl: require('@/assets/images/list.png'),
      name: '中奖名单'
    },
    {
      link: '/draw/rule',
      imgUrl: require('@/assets/images/attention.png'),
      name: '抽奖规则'
    },
    {
      link: '/draw/award',
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
