import * as types from '../mutation-types'
import * as http from '@/services'
const state = {
  categories: []
}
// mutations
const mutations = {
  [types.RECEIVE_CATEGORY](state, list) {
    state.categories = list
  }
}

const actions = {
  getCategory({
    commit
  }) {
    http.getCategory(0, 1).then((res) => {
      if (res.retcode === 0) {
        commit(types.RECEIVE_CATEGORY, res.respbody.dataList)
      }
    })
  },
}

export default {
  state,
  mutations,
  actions
}
