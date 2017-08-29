<template>
  <div>
    <goods-header class="fixed-header" @on-click="showView"></goods-header>
    <transition name="ve-pop-in">
      <keep-alive>
        <component :is="currentView" class="goods-body" :goods="goods"></component>
      </keep-alive>
    </transition>
    <goods-footer class="fixed-footer" @on-exchange="exchange"></goods-footer>
  </div>
</template>
<script>
import GoodsHeader from './header'
import GoodsFooter from './footer'
import Goods from './goods'
import Detail from './detail'
import Comments from './comments'
import * as http from '@/services'
export default {
  name: 'goods-detail',
  components: {
    GoodsHeader,
    GoodsFooter,
    Goods,
    Detail,
    Comments
  },
  created() {
    let id = this.$store.state.route.query.id
    this.getCommodityDetail(id)
  },
  data() {
    return {
      currentView: 'goods',
      goods: {}
    }
  },
  methods: {
    getCommodityDetail(id) {
      http.commodityDetail(id).then(res => {
        if (res.retcode === 0) {
          this.goods = res.respbody
        }
      })
    },
    showView(name) {
      this.currentView = name
    },
    exchange() {
      let list = [{
        "commodityId": this.goods.commodityId,
        "price": this.goods.price,
        "quantity": 1
      }]
      http.integralExchange(this.goods.price, list).then(res => {
        if (res.retcode === 0) {
          this.$ve.toast.success('兑换成功', () => {
            this.$router.go(-1)
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
