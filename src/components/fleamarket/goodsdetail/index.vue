<template>
  <div>
    <goods-header class="fixed-header" @on-click="showView"></goods-header>
    <transition name="ve-pop-in">
      <keep-alive>
        <component :is="currentView" class="goods-body"></component>
      </keep-alive>
    </transition>
    <goods-footer class="fixed-footer" @on-buy="buy"></goods-footer>
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
    let query = is.$store.state.route.query
    let id = query.id
    this.listId = query.lId
    this.getCommodityDetail(id)
  },
  data() {
    return {
      currentView: 'goods',
      listId: 0,
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
    buy() {
      http.fleaMarketTrade(this.listId).then(res => {
        if (res.retcode === 0) {
          this.$ve.toast.success('购买成功', () => {
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
