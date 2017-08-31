<template>
  <div>
    <goods-header class="fixed-header" @on-click="showView"></goods-header>
    <transition name="ve-pop-in">
      <keep-alive>
        <component :is="currentView" class="goods-body" @on-qty-change="qtyChange"></component>
      </keep-alive>
    </transition>
    <goods-footer class="fixed-footer" @on-buy="buy"></goods-footer>
    <confirm-detail v-model="show" :pay-url="payUrl"></confirm-detail>
  </div>
</template>
<script>
import GoodsHeader from './header'
import GoodsFooter from './footer'
import Goods from './goods'
import Detail from './detail'
import ConfirmDetail from './confirmdetail'
import * as http from '@/services'
export default {
  name: 'goods-detail',
  components: {
    GoodsHeader,
    GoodsFooter,
    Goods,
    Detail,
    ConfirmDetail
  },
  computed: {
    goods() {
      return this.$store.state.goods.goods
    }
  },
  data() {
    return {
      currentView: 'goods',
      qty: 1,
      show: false
    }
  },
  methods: {
    showView(name) {
      this.currentView = name
    },
    qtyChange(qty) {
      this.qty = qty
    },
    buy() {
      if (this.judgeAttr()) {
        let ret = { ...this.goods }
        ret.quantity = this.qty
        let list = [{
          "commodityId": this.goods.commodityId,
          "price": this.goods.pice,
          "quantity": this.qty
        }]
        let amount = this.goods.price * this.qty
        http.couponsDirectBuy(amount, list).then(res => {
          if (res.retcode === 0) {
            this.$ve.toast.success('下单成功', () => {
              this.payUrl = res.respbody.urlList
              this.show = true
            })
          }
        })
      }
    }
  }
}
</script>
<style lang="scss">
.goods-body {
  padding: 40px 0 50px;
}
</style>
