import IntegralOrderList from '@/components/orderlist/integral'
import IntegralOrderDelivery from '@/components/delivery'
import IntegralOrderTransfer from '@/components/transfer'
import FleaOrderList from '@/components/orderlist/flea'
import Maintaince from '@/components/maintaince'
import OldforNew from '@/components/oldfornew'
import OrderList from '@/components/orderlist'
import ExpressStatus from '@/components/express'
import FleaExpressStatus from '@/components/express/flea'
import Sechedule from '@/components/schedule'
import Evaluation from '@/components/evaluation'
import Collection from '@/components/collection'
import FleaOrderDelivery from '@/components/delivery/flea'
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
  },
  {
    path: '/flea/order/delivery',
    name: 'flea-delivery',
    component: FleaOrderDelivery
  }, {
    path: '/integral/order/transfer',
    name: 'integral-transfer',
    component: IntegralOrderTransfer
  },
  {
    path: '/flea/order/list',
    component: FleaOrderList
  }, {
    path: '/maintaince',
    name: 'maintaince',
    component: Maintaince
  }, {
    path: '/oldfornew',
    name: 'oldfornew',
    component: OldforNew
  }, {
    path: '/expressstatus',
    name: 'expressstatus',
    component: ExpressStatus
  }, {
    path: '/flea/expressstatus',
    name: 'flea-expressstatus',
    component: FleaExpressStatus
  },
  {
    path: '/sechedule',
    name: 'sechedule',
    component: Sechedule
  }, {
    path: '/evaluation',
    name: 'evaluation',
    component: Evaluation
  }, {
    path: '/collection',
    component: Collection
  }
]
