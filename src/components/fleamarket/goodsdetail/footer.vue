<template>
  <div class="goods-footer">
    <div class="goods-collect">
      <span>收藏</span>
    </div>
    <div class="goods-action goods-cart">加入购物车</div>
    <div class="goods-action goods-buy" @click="buy">立即购买</div>
  </div>
</template>
<script>
export default {
  name: 'goods-footer',
  methods: {
    buy() {
      this.$router.push('/fleamarket/confirm')
    }
  }
}
</script>
