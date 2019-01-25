import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import lottery from './modules/lottery'
import seckill from './modules/seckill'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    lottery,
    seckill
  }
})