<template>
  <div class="my-section">
    <a class="header header-access" @click="showOrderList">
      <i class=""></i>
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
  methods: {
    showOrderList() {
      this.$router.push('/orderlist')
    }
  }
}
</script>
<style lang="scss">
.my-section {
  margin: .24rem 0;
  background: #fff;
  .header {
    position: relative;
    display: block;
    height: .82rem;
    line-height: .82rem;
    font-size: 0;
    padding: 0 10px;
    i {
      display: inline-block;
      height: .82rem;
      width: .62rem;
      background: url('../../assets/order/order.png') no-repeat;
      background-position: 50%;
      background-size: .31rem .35rem;
      vertical-align: middle;
    }
    em {
      height: .82rem;
      font-size: 14px;
      display: inline-block;
      font-style: normal;
      vertical-align: middle;
    }
    span {
      color: #999;
      position: absolute;
      right: 25px;
      font-size: 12px;
    }
  }
  .header-access {
    @include arrow-right(8px);
    &:after {
      right: 10px;
    }
  }
}

.my-order {
  position: relative;
  display: flex;
  @include topline();
  li {
    flex: 1;
    text-align: center;
    a {
      box-sizing: border-box;
      height: 1.8rem;
      display: block;
      padding: 10px 0;
      color: #999;
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


