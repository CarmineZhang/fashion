<template>
  <div>
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
    <div class="footer-action">
      <div class="footer-desc">共一件商品</div>
      <a class="action" @click="confirm">提交订单</a>
    </div>
    <confirm v-model="show"></confirm>
  </div>
</template>
<script>
import Confirm from './confirm'
export default {
  name: 'integral-order',
  components: {
    Confirm
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    confirm() {
      this.show = true
    }
  }
}
</script>
