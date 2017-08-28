import GoodsDetail from '@/components/goodsdetail'
import Goods from '@/components/goodsdetail/goods'
import Detail from '@/components/goodsdetail/detail'
import Comments from '@/components/goodsdetail/comments'
export default {
  path: '/goodsdetail',
  component: GoodsDetail,
  children: [{
    path: '/',
    name: 'goods',
    component: Goods
  }, {
    path: 'detail',
    name: 'detail',
    component: Detail
  }, {
    path: 'comments',
    name: 'comments',
    component: Comments
  }]
}
