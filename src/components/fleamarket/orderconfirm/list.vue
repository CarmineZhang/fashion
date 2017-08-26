<template>
  <div class="order-goods-list">
    <div class="goods-img">
      <img src="//img10.360buyimg.com/n4/jfs/t6043/305/5636125253/87985/21230f90/596f169aN1246fe10.jpg" alt="">
    </div>
    <div class="goods-info">
      <p>苹果手机</p>
      <p class="type">iphone 64G</p>
    </div>
    <div class="goods-price">
      <strong class="price">¥3499.00</strong>
      <p>×1</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'order-list'
}
</script>
<style lang="scss">
.order-goods-list {
  padding: 10px;
  display: flex;
  color: #333;
  background-color: #fff;
  .goods-img {
    width: 75px;
    height: 75px;
    img {
      width: 100%;
    }
  }
  .goods-info {
    flex: 1;
    .type {
      color: #666;
    }
  }
  .goods-price {
    flex: 1;
    text-align: right;
    .price {
      color: #e93b3d;
    }
  }
}
</style>

