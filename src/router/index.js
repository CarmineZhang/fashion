import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Cart from '@/components/cart'
import Category from '@/components/category'
import Login from '@/components/login'
import GoodsDetail from '@/components/goodsdetail'
import Goods from '@/components/goodsdetail/goods'
import Detail from '@/components/goodsdetail/detail'
import SelectInvoice from '@/components/invoice'
import Gift from '@/components/gift'
import Home from '@/components/index/home'
import Register from '@/components/register'
import OrderList from '@/components/orderlist'
import OrderConfirmRouter from './confirm'
import SettingRouter from './settings'
import IntegralRouter from './integral'
import FleaMarketRouter from './fleamarket'
import UserCenter from '@/components/usercenter'
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
    path: '/gift',
    component: Gift
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
  }, {
    path: '/goodsdetail',
    component: GoodsDetail,
    children: [{
      path: '',
      name: 'goods',
      component: Goods
    }, {
      path: 'detail',
      name: 'detail',
      component: Detail
    }]
  }, OrderConfirmRouter, SettingRouter, IntegralRouter, ...FleaMarketRouter]
})
