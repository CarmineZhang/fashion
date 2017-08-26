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
    <div class="cell">
      <div class="cell-hd">
        买家留言
      </div>
      <div class="cell-bd">
        <input type="text" class="ipt">
      </div>
    </div>
    <div class="i-o-footer">
      <div class="footer-desc">共一件商品</div>
      <a class="footer-action">提交订单</a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'integral-confirm',
  methods: {
  }
}
</script>
<style lang="scss">
.i-o-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40px;
  line-height: 40px;
  display: flex;
  background-color: #fff;
  .footer-desc {
    flex: 1;
    text-align: center;
  }
  .footer-action {
    width: 100px;
    display: block;
    text-align: center;
    color: #fff;
    background-color: $orange;
  }
}
</style>
