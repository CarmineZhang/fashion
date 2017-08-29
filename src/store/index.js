import Vue from 'vue'
import Vuex from 'vuex'
import address from './modules/address'
import home from './modules/home'
import category from './modules/category'
import goods from './modules/goods'
import user from './modules/user'
import * as types from './mutation-types'
Vue.use(Vuex)

const state = {
  settlegoods: []
}

const mutations = {
  [types.RECEIVE_SETTLE_GOODS](state, goods) {
    state.settlegoods = goods
  }
}


export default new Vuex.Store({
  state,
  mutations,
  modules: {
    address,
    home,
    category,
    goods,
    user,
  }
})
