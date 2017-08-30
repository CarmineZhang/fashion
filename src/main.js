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
import Toast from '@/plugins/widget/toast'
import VueLazyload from 'vue-lazyload'
import VueQrcode from 'vue-qrcode'
import './sass/main.scss'
Vue.config.productionTip = false
Vue.use(Validator)
Vue.use(Widget)
Vue.use(Toast)

Vue.use(VueLazyload)
Vue.component('qrcode', VueQrcode)
sync(store, router)

Vue.directive('price', {
  bind: function (el, binding) {
    let val = binding.value
    if (typeof val !== 'number') {
      val = Number(val)
    }
    el.innerHTML = val.toFixed(2)
  },
  componentUpdated(el, binding) {
    let val = binding.value
    if (typeof val !== 'number') {
      val = Number(val)
    }
    el.innerHTML = val.toFixed(2)
  }
})

Vue.filter('price', (val) => {
  if (typeof val !== 'number') {
    val = Number(val)
  }
  return val.toFixed(2)
})

Vue.directive('attr', (el, binding) => {
  let val = binding.value
  let ret = ''
  if (val) {
    val.forEach(item => {
      ret += item.propertyName + '  ' + item.selector + '  '
    })
  }
  el.innerHTML = ret
})

Vue.directive('attrDetail', (el, binding) => {
  var item = binding.value
  let ret = ''
  if (item.provinceName) {
    ret += item.provinceName
  }
  if (item.cityName) {
    ret += item.cityName
  }
  if (item.districtName) {
    ret += item.districtName
  }
  if (item.townName) {
    ret += item.townName
  }
  if (item.addressDetail) {
    ret += item.addressDetail
  }
  el.innerHTML = ret
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
