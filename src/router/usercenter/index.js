import IntegralOrderList from '@/components/orderlist/integral'
import IntegralOrderDelivery from '@/components/delivery'
import IntegralOrderTransfer from '@/components/transfer'
import FleaOrderList from '@/components/orderlist/flea'
export default [{
    path: '/integral/order/list',
    component: IntegralOrderList
  }, {
    path: '/integral/order/delivery',
    component: IntegralOrderDelivery
  }, {
    path: '/integral/order/transfer',
    component: IntegralOrderTransfer
  },
  {
    path: '/flea/order/list',
    component: FleaOrderList
  }
]
