import Vue from 'vue'
import Vuex from 'vuex'
import address from './modules/address'
import home from './modules/home'
Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    address,
    home
  }
})
