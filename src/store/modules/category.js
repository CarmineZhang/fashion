import * as types from '../mutation-types'
import * as http from '@/services'
const state = {
  categories: [],
  jfcategories: [],
}
// mutations
const mutations = {
  [types.RECEIVE_CATEGORY](state, list) {
    state.categories = list
  },
  [types.RECEIVE_JIFEN_CATEGORY](state, list) {
    state.jfcategories = list
  }
}

const actions = {
  getCategory({
    commit
  }) {
    return http.getCategory(0, 1).then((res) => {
      if (res.retcode === 0) {
        commit(types.RECEIVE_CATEGORY, res.respbody.dataList)
      }
    }).then((ab) => {
      console.dir(ab)
    })
  },
  getJFCategory({
    commit
  }) {
    return http.getCategory(0, 2).then((res) => {
      if (res.retcode === 0) {
        commit(types.RECEIVE_JIFEN_CATEGORY, res.respbody.dataList)
      }
    })
  }
}

export default {
  state,
  mutations,
  actions
}
