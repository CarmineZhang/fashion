import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Cart from '@/components/cart'
import Category from '@/components/category'
import Login from '@/components/login'
import SelectInvoice from '@/components/invoice'
import Home from '@/components/index/home'
import Register from '@/components/register'
import OrderList from '@/components/orderlist'
import OrderConfirmRouter from './confirm'
import SettingRouter from './settings'
import IntegralRouter from './integral'
import FleaMarketRouter from './fleamarket'
import UserCenter from '@/components/usercenter'
import UserCenterRouter from './usercenter'
import GiftRouter from './gift'
import GoodsRouter from './goods'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: Index,
    children: [{
      path: '/',
      component: Home
    }, {
      path: '/cart',
      component: Cart
    }, {
      path: '/category',
      component: Category
    }, {
      path: '/usercenter',
      component: UserCenter,
    }]
  }, {
    path: '/selectinvoice',
    component: SelectInvoice
  }, {
    path: '/register',
    component: Register
  }, {
    path: '/login',
    component: Login
  }, {
    path: '/orderlist',
    component: OrderList
  }, GoodsRouter, OrderConfirmRouter, SettingRouter, ...IntegralRouter, ...FleaMarketRouter, ...UserCenterRouter, ...GiftRouter]
})
