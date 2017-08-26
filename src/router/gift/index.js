import List from '@/components/giftcard'
import CardDetail from '@/components/giftcard/carddetail'
import Card from '@/components/giftcard/carddetail/goods'
import Detail from '@/components/giftcard/carddetail/detail'

export default [{
  path: '/gift/list',
  component: List
}, {
  path: '/gift/carddetail',
  component: CardDetail,
  children: [{
    path: '/',
    component: Card
  }, {
    path: 'detail',
    name: 'gift-card-detail',
    component: Detail
  }]
}]
