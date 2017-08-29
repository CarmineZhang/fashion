<template>
  <div>
    <div class="order-goods-list" v-for="item in list" :key="item.detailID">
      <div class="goods-img">
        <img :src="item.icon" alt="">
      </div>
      <div class="goods-info">
        <p v-text="item.title"></p>
        <p class="type" v-attr="item.type">iphone 64G</p>
      </div>
      <div class="goods-price">
        <strong class="price">¥{{item.price}}</strong>
        <p>×{{item.quantity}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'order-list',
  props: {
    list: Array
  }
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

