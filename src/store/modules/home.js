import * as types from '../mutation-types'
import * as http from '@/services'
const state = {
  banners: [],
  activities: [],
  columns: [],
  integralbanners: [],
  integralcolumns: []
}
// mutations
const mutations = {
  [types.RECEIVE_BANNERS](state, list) {
    state.banners = list
  },
  [types.RECEIVE_ACTIVITY](state, list) {
    state.activities = list
  },
  [types.RECEIVE_COLUMNS](state, list) {
    state.columns = list
  },
  [types.RECEIVE_INTEGRAL_BANNERS](state, list) {
    state.integralbanners = list
  },
  [types.RECEIVE_INTEGRAL_COLUMNS](state, list) {
    state.integralcolumns = list
  }
}

const actions = {
  getBanners({
    commit
  }) {
    http.getHomeBanner('top').then((res) => {
      if (res.retcode === 0) {
        commit(types.RECEIVE_BANNERS, res.respbody.list)
      }
    })
  },
  getActivities({
    commit
  }) {
    http.getHomeBanner('activity').then((res) => {
      if (res.retcode === 0) {
        commit(types.RECEIVE_ACTIVITY, res.respbody.list)
      }
    })
  },
  getColumns({
    commit
  }) {
    http.getHomePageSort(1, 3).then(res => {
      if (res.retcode === 0) {
        commit(types.RECEIVE_COLUMNS, res.respbody.arrayList)
      }
    })
  },
  getIntegralBanners({
    commit
  }) {
    http.getHomeBanner('integral').then((res) => {
      if (res.retcode === 0) {
        commit(types.RECEIVE_INTEGRAL_BANNERS, res.respbody.list)
      }
    })
  },
  getIntegralColumns({
    commit
  }) {
    http.getHomePageSort(2, 2).then((res) => {
      if (res.retcode === 0) {
        commit(types.RECEIVE_INTEGRAL_COLUMNS, res.respbody.arrayList)
      }
    })
  }
}

export default {
  state,
  mutations,
  actions
}
