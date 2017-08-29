<template>
  <div>
    <goods-header class="fixed-header" @on-click="showView"></goods-header>
    <transition name="ve-pop-in">
      <keep-alive>
        <component :is="currentView" class="goods-body" :goods="goods"></component>
      </keep-alive>
    </transition>
    <goods-footer class="fixed-footer" @on-buy="buy"></goods-footer>
    <confirm v-model="show" :pay-url="payUrl"></confirm>
  </div>
</template>
<script>
import GoodsHeader from './header'
import GoodsFooter from './footer'
import Goods from './goods'
import Detail from './detail'
import Comments from './comments'
import Confirm from './confirm'
import * as http from '@/services'

export default {
  name: 'goods-detail',
  components: {
    GoodsHeader,
    GoodsFooter,
    Goods,
    Detail,
    Comments,
    Confirm
  },
  created() {
    let query = this.$store.state.route.query
    this.cId = query.id
    this.getCommodityDetail()
  },
  data() {
    return {
      currentView: 'goods',
      cId: 0,
      goods: {},
      show: false,
      payUrl: {}
    }
  },
  methods: {
    getCommodityDetail() {
      http.commodityDetail(this.cId).then(res => {
        if (res.retcode === 0) {
          this.goods = res.respbody
        }
      })
    },
    showView(name) {
      this.currentView = name
    },
    buy() {
      http.fleaBuying(this.cId).then(res => {
        if (res.retcode === 0) {
          this.$ve.toast.success('购买成功', () => {
            this.show = true
            this.payUrl = res.respbody.urlList
          })
        } else {
          this.$ve.alert(res.msg)
        }
      })
    }
  }
}
</script>
<style lang="scss">
.goods-body {
  padding: 40px 0 50px;
}
</style>
