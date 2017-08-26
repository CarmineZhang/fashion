import * as types from '../mutation-types'
import * as http from '@/services'
const state = {
  list: [],
  allowLoad: true,
  jflist: [],
  goods: {}
}
// mutations
const mutations = {
  [types.RECEIVE_GOODS](state, list) {
    state.list = list
  },
  [types.RECEIVE_JFGOODS](state, list) {
    state.jflist = list
  },
  [types.RECEIVE_GOODS_MORE](state, list) {
    state.list = [...state.list, ...list]
  },
  [types.GOODS_ALLOWLOAD](state, flag) {
    state.allowLoad = flag
  },
  [types.RECEIVE_GOODS_DETAIL](state, goods) {
    state.goods = goods
  }
}

const actions = {
  getCommodity({
    commit
  }, {
    cId,
    index,
    size
  }) {
    return http.getCommodity(cId, 1, index, size).then(res => {
      if (res.retcode === 0) {
        let list = res.respbody.dataList
        if (list.length < size) {
          commit(types.GOODS_ALLOWLOAD, false)
        } else {
          commit(types.GOODS_ALLOWLOAD, true)
        }
        commit(types.RECEIVE_GOODS, list)
      }
    })
  },
  getCommodityMore({
    commit
  }, {
    cId,
    index,
    size
  }) {
    return http.getCommodity(cId, 1, index, size).then(res => {
      if (res.retcode === 0) {
        let list = res.respbody.dataList
        if (list.length < size) {
          commit(types.GOODS_ALLOWLOAD, false)
        } else {
          commit(types.GOODS_ALLOWLOAD, true)
        }
        commit(types.RECEIVE_GOODS_MORE, list)
      }
    })
  },
  getJFCommodity({
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
  getCommodityDetail({
    commit
  }, {
    cId
  }) {
    return http.commodityDetail(cId).then(res => {
      if (res.retcode === 0) {
        commit(types.RECEIVE_GOODS_DETAIL, res.respbody)
      }
    })
  }
}

export default {
  state,
  mutations,
  actions
}
