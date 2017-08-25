/**
 * 跳蚤市场
 */
import FleaMarketIndex from '@/components/fleamarket/index'
import Sale from '@/components/fleamarket/sale'
import Buy from '@/components/fleamarket/buy'
export default {
  path: '/fleamarket',
  component: FleaMarketIndex,
  children: [{
    path: '',
    name: 'flea-sale',
    component: Sale
  }, {
    path: 'buy',
    name: 'flea-buy',
    component: Buy
  }]
}
