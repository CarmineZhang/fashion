// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {
  sync
} from 'vuex-router-sync'
import Validator from '@/plugins/validator'
import Widget from '@/plugins/widget'
import './sass/main.scss'
Vue.config.productionTip = false
Vue.use(Validator)
Vue.use(Widget)
sync(store, router)

Vue.directive('price', {
  bind: function (el, binding) {
    let val = binding.value
    if (typeof val !== 'number') {
      val = Number(val)
    }
    el.innerHTML = '¥' + val.toFixed(2)
  },
  componentUpdated(el, binding) {
    let val = binding.value
    if (typeof val !== 'number') {
      val = Number(val)
    }
    el.innerHTML = '¥' + val.toFixed(2)
  }
})

Vue.filter('price', (val) => {
  if (typeof val !== 'number') {
    val = Number(val)
  }
  return '¥' + val.toFixed(2)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
