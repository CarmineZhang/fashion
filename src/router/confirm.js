/**
 * 确认订单的页面
 */
import OrderConfirm from '@/components/orderconfirm'
import Confirm from '@/components/orderconfirm/confirm'
import SelectAddr from '@/components/orderconfirm/selectaddr'
import AddAddr from '@/components/orderconfirm/addaddr'
export default {
  path: '/orderconfirm',
  component: OrderConfirm,
  children: [{
    path: '',
    name: 'confirm',
    component: Confirm
  }, {
    path: 'selectaddr',
    name: 'order-select-addr',
    component: SelectAddr
  }, {
    path: 'add',
    name: 'order-add-address',
    component: AddAddr
  }]
}
