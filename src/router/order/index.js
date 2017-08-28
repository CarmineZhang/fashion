import IntegralOrderList from '@/components/orderlist/integral'
import IntegralOrderDelivery from '@/components/delivery'
import IntegralOrderTransfer from '@/components/transfer'
import FleaOrderList from '@/components/orderlist/flea'
import Maintaince from '@/components/maintaince'
import OrderList from '@/components/orderlist'
export default [{
    path: '/orderlist',
    component: OrderList
  }, {
    path: '/integral/order/list',
    component: IntegralOrderList
  }, {
    path: '/integral/order/delivery',
    name: 'integral-delivery',
    component: IntegralOrderDelivery
  }, {
    path: '/integral/order/transfer',
    component: IntegralOrderTransfer
  },
  {
    path: '/flea/order/list',
    component: FleaOrderList
  }, {
    path: '/maintaince',
    name: 'maintaince',
    component: Maintaince
  }
]
