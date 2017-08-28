import * as types from '../mutation-types'
import * as http from '@/services'
const state = {
  info: {}
}
// mutations
const mutations = {
  [types.RECEIVE_USERINFO](state, info) {
    state.info = info
  },

}

const actions = {
  getUserInfo({
    commit
  }) {
    http.userInfo().then(res => {
      if (res.retcode === 0) {
        commit(types.RECEIVE_USERINFO, res.respbody)
      }
    })
  }
}

export default {
  state,
  mutations,
  actions
}
