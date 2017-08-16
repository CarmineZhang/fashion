import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/Test'
import Index from '@/components/index'
import UserCenter from '@/components/usercenter'
import Setting from '@/components/usercenter/setting'
import Cart from '@/components/cart'
import Category from '@/components/category'
// import Login from '@/components/login'
import GoodsDetail from '@/components/goodsdetail'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: Index,
    children: [{
      path: '/',
      component: GoodsDetail
    }, {
      path: '/usercenter',
      component: UserCenter
    }, {
      path: '/cart',
      component: Cart
    }, {
      path: '/category',
      component: Category
    }]
  }, {
    path: '/setting',
    component: Setting
  }, {
    path: '/test',
    component: Test
  }]
})
