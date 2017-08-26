/**
 * 积分路由
 */
import IntegralIndex from '@/components/integral/index'
import IntegralGoods from '@/components/integral/detail'
import Goods from '@/components/integral/detail/goods'
import Detail from '@/components/integral/detail/detail'
import Order from '@/components/integral/order'
export default [{
  path: '/integral',
  component: IntegralIndex
}, {
  path: '/integralgoods',
  component: IntegralGoods,
  children: [{
    path: '/',
    name: 'integralgoods',
    component: Goods
  }, {
    path: 'detail',
    name: 'integraldetail',
    component: Detail
  }]
}, {
  path: '/integral/order',
  component: Order
}]
