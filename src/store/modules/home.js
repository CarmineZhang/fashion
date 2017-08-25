import * as types from '../mutation-types'
import * as http from '@/services'
const state = {
  banners: [],
  activities: [],
  columns: []
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
      if (res.retcod === 0) {
        commit(types.RECEIVE_COLUMNS, res.respbody.arrayList)
      }
    })
  }
}

export default {
  state,
  mutations,
  actions
}
