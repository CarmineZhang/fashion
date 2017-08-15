<template>
  <div class="my-section">
    <a class="header header-access">
      <em>我的订单</em>
      <span>查看全部订单</span>
    </a>
    <ul class="my-order">
      <li>
        <a href="">待付款</a>
      </li>
      <li>
        <a href="">待发货</a>
      </li>
      <li>
        <a href="">待收货</a>
      </li>
      <li>
        <a href="">待评价</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'my-order',
}
</script>
<style lang="scss">
.my-order {
  position: relative;
  display: flex;
  @include topline();
  li {
    flex: 1;
    text-align: center;
    a {
      display: block;
      padding: 10px 0;
      color: #666;
      font-size: 12px;
    }
  }
}
</style>


