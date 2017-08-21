<template>
  <div class="my-section">
    <a class="header header-access">
      <em>我的订单</em>
      <span>查看全部订单</span>
    </a>
    <ul class="my-order">
      <li>
        <a href="" class="o-pay">待付款</a>
      </li>
      <li>
        <a href="" class="o-delivery">待发货</a>
      </li>
      <li>
        <a href="" class="o-receive">待收货</a>
      </li>
      <li>
        <a href="" class="o-evaluate">待评价</a>
      </li>
      <li>
        <a href="" class="o-service">售后</a>
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
      &::before {
        content: '';
        display: block;
        width: .42rem;
        height: .42rem;
        margin: 7px auto 5px;
      }
    }
    a.o-pay {
      &:before {
        background: url('../../assets/order/pay.png') no-repeat;
        background-size: 100%;
      }
    }
    a.o-delivery {
      &:before {
        background: url('../../assets/order/delivery.png') no-repeat;
        background-size: 100%;
      }
    }
    .o-receive {
      &:before {
        background: url('../../assets/order/receive.png') no-repeat;
        background-size: 100%;
      }
    }
    a.o-evaluate {
      &:before {
        background: url('../../assets/order/evaluate.png') no-repeat;
        background-size: 100%;
      }
    }
    a.o-service {
      &:before {
        background: url('../../assets/order/service.png') no-repeat;
        background-size: 100%;
      }
    }
  }
}
</style>


