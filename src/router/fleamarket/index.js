/**
 * 跳蚤市场
 */
import FleaMarketIndex from '@/components/fleamarket/index'
import Sale from '@/components/fleamarket/sale'
import Buy from '@/components/fleamarket/buy'
import PublishBuy from '@/components/fleamarket/buy/publish'
import GoodsDetail from '@/components/fleamarket/goodsdetail'
import Goods from '@/components/fleamarket/goodsdetail/goods'
import Detail from '@/components/fleamarket/goodsdetail/detail'
import Confirm from '@/components/fleamarket/orderconfirm'
import Cart from '@/components/fleamarket/cart'
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
    path: '/publish/buy',
    component: PublishBuy
  },
  {
    path: '/fleamarket/goods',
    component: GoodsDetail,
    chileren: [{
      path: '/',
      component: Goods
    }, {
      path: 'detail',
      name: 'flea-goods-detail',
      component: Detail
    }]
  }, {
    path: '/fleamarket/confirm',
    component: Confirm
  },
  {
    path: '/fleamarket/cart',
    component: Cart
  },
]
