import * as types from '../mutation-types'
import * as http from '@/services'
const state = {
  list: [],
  jflist: []
}
// mutations
const mutations = {
  [types.RECEIVE_GOODS](state, list) {
    state.list = list
  },
  [types.RECEIVE_JFGOODS](state, list) {
    state.jflist = list
  },

}

const actions = {
  getCommidity({
    commit
  }, {
    cId,
    index,
    size
  }) {
    return http.getCommodity(cId, 1, index, size).then(res => {
      if (res.retcode === 0) {
        commit(types.RECEIVE_GOODS, res.respbody.dataList)
      }
    })
  },
  getJFCommidity({
    commit
  }, {
    cId,
    index,
    size
  }) {
    return http.getCommodity(cId, 4, index, size).then(res => {
      if (res.retcode === 0) {
        commit(types.RECEIVE_JFGOODS, res.respbody.dataList)
      }
    })
  },
}

export default {
  state,
  mutations,
  actions
}
