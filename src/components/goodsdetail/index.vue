<template>
  <div>
    <goods-header class="fixed-header" @on-click="showView"></goods-header>
    <transition name="ve-pop-in">
      <keep-alive>
        <!-- <router-view class="goods-body"></router-view> -->
        <component :is="currentView" class="goods-body"></component>
      </keep-alive>
    </transition>
    <goods-footer class="fixed-footer"></goods-footer>
  </div>
</template>
<script>
import GoodsHeader from './header'
import GoodsFooter from './footer'
import Goods from './goods'
import Detail from './detail'
import Comments from './comments'
export default {
  name: 'goods-detail',
  components: {
    GoodsHeader,
    GoodsFooter,
    Goods,
    Detail,
    Comments
  },
  data() {
    return {
      currentView: 'goods'
    }
  },
  methods: {
    showView(name) {
      this.currentView = name
    }
  }
}
</script>
<style lang="scss">
.goods-body {
  padding: 40px 0 50px;
}
</style>
