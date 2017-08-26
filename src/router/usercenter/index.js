import IntegralOrderList from '@/components/orderlist/integral'
import IntegralOrderDelivery from '@/components/delivery'
import IntegralOrderTransfer from '@/components/transfer'

export default [{
  path: '/integral/order/list',
  component: IntegralOrderList
}, {
  path: '/integral/order/delivery',
  component: IntegralOrderDelivery
}, {
  path: '/integral/order/transfer',
  component: IntegralOrderTransfer
}]
