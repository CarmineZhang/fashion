import * as types from '../mutation-types'
import * as http from '@/services'

// initial state
const state = {
  list: []
}
const getters = {
  defaultAddr: state => {
    let arr = state.list.filter((item) => {
      return item.isDefault === 1
    })
    if (arr.length > 0) {
      return arr[0]
    }
    return {}
  }
}
// mutations
const mutations = {
  [types.DEL_TO_ADDRESS](state, {
    addrId
  }) {
    state.list = state.list.filter((item) => {
      return item.id !== addrId
    })
  },
  [types.RECEIVE_ADDRESSLIST](state, {
    addrList
  }) {
    state.list = addrList
  },
  [types.SET_DEFAULT_ADDR](state, {
    id
  }) {
    state.list.forEach((item) => {
      item.id === id ? item.isDefault = 1 : item.isDefault = 0
    })
  }
}

const actions = {
  getAddrList({
    commit
  }) {
    return http.getAddrList().then((res) => {
      if (res.retcode === 0) {
        commit(types.RECEIVE_ADDRESSLIST, {
          addrList: res.respbody.list
        })
      }
    })
  },
  editAddr(context, addr) {
    return http.editAddr(addr)
  },
  deleteAddr(context, {
    id
  }) {
    return http.delAddr(id)
  },
  setDefaultAddr(context, {
    id
  }) {
    return http.setAddrDefault(id)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
