<template>
  <div>
    <div class="header-wrapper">
      <a class="header-back"></a>
      <div class="header-info">积分订单</div>
    </div>
    <div class="search-wrapper">
      <search-bar></search-bar>
    </div>
    <div class="o-list-wrapper">
      <div>
        <div class="item-body-wrapper">
          <div class="item-body">
            <img src="//img10.360buyimg.com/n2/jfs/t3094/57/1107687023/202099/ff931399/57c6b282n38d78374.jpg" alt="">
            <div class="content">
              <div class="info">
                <p class="title">固特异手工皮鞋</p>
                <p class="desc">颜色分类：A 宝石蓝</p>
              </div>
              <p>
                <span>
                  <em>¥ </em>
                  <span>2230.00</span>
                </span>
                <span>x1</span>
              </p>
            </div>
          </div>
        </div>
        <div class="item-footer">
          共1件商品，合计2330
        </div>
        <div class="item-op">
          <a class="op" @click="delivery">提货</a>
          <a class="op" @click="sale">转售</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SearchBar from '@/components/widget/searchbar'
export default {
  name: 'integral-order-list',
  components: {
    SearchBar
  },
  methods: {
    delivery() {
      this.$router.push('/integral/order/delivery')
    },
    sale() {
      this.$router.push('/integral/order/transfer')
    }
  }
}
</script>
<style lang="scss">
.o-list-wrapper {
  background-color: #fff;
  padding: $searchbarHeight+ 10px 0;
}
</style>
