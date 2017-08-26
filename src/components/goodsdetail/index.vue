<template>
  <div>
    <goods-header class="fixed-header"></goods-header>
    <transition name="ve-pop-in">
      <keep-alive>
        <router-view class="goods-body"></router-view>
      </keep-alive>
    </transition>
    <goods-footer class="fixed-footer"></goods-footer>
  </div>
</template>
<script>
import GoodsHeader from './header'
import GoodsFooter from './footer'
export default {
  name: 'goods-detail',
  components: {
    GoodsHeader,
    GoodsFooter
  },
  created() {
    var id = this.$store.state.route.query.id;
    console.log(id)
    this.$store.dispatch('getCommodityDetail', { cId: id })
  }
}
</script>
<style lang="scss">
.goods-body {
  padding: 40px 0 50px;
}
</style>
