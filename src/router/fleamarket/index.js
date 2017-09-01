/**
 * 跳蚤市场
 */
import FleaMarketIndex from '@/components/fleamarket/index'
import Sale from '@/components/fleamarket/sale'
import Buy from '@/components/fleamarket/buy'
import Publish from '@/components/fleamarket/buy/publish'
import GoodsDetail from '@/components/fleamarket/goodsdetail'
import Transfer from '@/components/transfer/sale'
import PublishBuy from '@/components/publish'
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
    path: '/publish',
    component: Publish
  }, {
    path: '/publish/buy',
    name: 'publish-buy',
    component: PublishBuy
  },
  {
    path: '/fleamarket/goods',
    component: GoodsDetail
  }, {
    path: '/fleamarket/sale',
    name: 'flea-transfer',
    component: Transfer
  }
]
