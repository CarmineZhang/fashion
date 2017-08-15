import Vue from 'vue'
import Router from 'vue-router'
// import Test from '@/components/Test'
import Index from '@/components/index'
import UserCenter from '@/components/usercenter'
import Setting from '@/components/usercenter/setting'
import Cart from '@/components/cart'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: Index,
    children: [{
      path: '/usercenter',
      component: UserCenter
    }, {
      path: '/cart',
      component: Cart
    }]
  }, {
    path: '/setting',
    component: Setting
  }]
})
