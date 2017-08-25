/**
 * 跳蚤市场
 */
import FleaMarketIndex from '@/components/fleamarket/index'
import Sale from '@/components/fleamarket/sale'
import Buy from '@/components/fleamarket/buy'
import PublishSale from '@/components/fleamarket/sale/publish'
export default [{
  path: '/fleamarket',
  component: FleaMarketIndex,
  children: [{
    path: '/',
    name: 'flea-sale',
    component: Sale
  }, {
    path: 'buy',
    name: 'flea-buy',
    component: Buy
  }]
}, {
  path: '/publish/sale',
  component: PublishSale
}]
