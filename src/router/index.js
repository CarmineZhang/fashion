import Vue from 'vue'
import Router from 'vue-router'
// import Test from '@/components/Test'
import Index from '@/components/index'
import UserCenter from '@/components/usercenter'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: Index,
    children: [{
      path: '/usercenter',
      component: UserCenter
    }]
  }]
})
