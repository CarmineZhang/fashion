import * as types from '../mutation-types'
// import * as http from '@/services'
let id = 2
const addrList = [{
  "addrID": 1,
  "province": "1",
  "city": "1",
  "countyName": "1",
  "townName": "1",
  "addressDetail": "北京市海淀区永泰东里",
  "realName": "张三",
  "mobile": "18612254938",
  "isDefault": 1
}]
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
    // return http.getAddrList().then((res) => {
    //   if (res.retcode === 0) {
    //     commit(types.RECEIVE_ADDRESSLIST, {
    //       addrList: res.respbody.list
    //     })
    //   }
    // })
    return new Promise((resolve) => {
      commit(types.RECEIVE_ADDRESSLIST, {
        addrList: addrList
      })
      resolve()
    })
  },
  editAddr(context, addr) {
    // return http.editAddr(addr)
    if (addr.addrID) {
      return new Promise((resolve) => {
        var index = addrList.findIndex(item => {
          return item.addrID == addr.addrID
        })
        if (index !== -1) {
          addrList.splice(index, 1, addr)
          resolve({
            retcode: 0
          })
        }
      })
    } else {
      return new Promise((resolve) => {
        addr.addrID = id++;
        addrList.push(addr)
        resolve({
          retcode: 0
        })
      })
    }
  },
  deleteAddr(context, {
    id
  }) {
    // return http.delAddr(id)
    return new Promise((resolve) => {
      var index = addrList.findIndex(item => {
        return item.addrID == id
      })
      if (index !== -1) {
        addrList.splice(index, 1)
        resolve({
          retcode: 0
        })
      }
    })

  },
  setDefaultAddr(context, {
    id
  }) {
    // return http.setAddrDefault(id)
    return new Promise((resolve) => {
      addrList.forEach(item => {
        item.addrID === id ? item.isDefault = 1 : item.isDefault = 0
      })
      resolve({
        retcode: 0
      })
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
