<template>
  <div class="my-section">
    <ul class="my-tool">
      <li>
        <router-link class="t-jifen" to="/integral/order/list">积分订单</router-link>
      </li>
      <li>
        <router-link class="t-tiaozao" to="/flea/order/list">跳蚤订单</router-link>
      </li>
      <li>
        <a href="" class="t-qrcode">我的二维码</a>
      </li>
      <li>
        <router-link href="" class="t-buy-card" to="/counpons/list">礼品卡</router-link>
      </li>
      <!-- <li>
          <router-link class="t-set" to="/setting">设置</router-link>
        </li> -->
    </ul>
  </div>
</template>
<script>
export default {
  name: 'tools'
}
</script>
<style lang="scss">
.my-tool {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  @include topline();
  li {
    flex: 0 0 25%;
    position: relative;
    @include rightline();
    @include bottomline();
    &:nth-child(4) {
      &::before {
        display: none;
      }
    }
    a {
      display: block;
      text-align: center;
      box-sizing: border-box;
      height: 1.8rem;
      padding: 10px 0;
      color: #999;
      font-size: 12px;
      &::before {
        width: .5rem;
        height: .5rem;
        margin: 10px auto;
        content: '';
        display: block;
      }
    }
    a.t-jifen {
      &:before {
        background: url('../../assets/tools/jfen.png') no-repeat;
        background-size: 100%;
      }
    }
    a.t-tiaozao {
      &:before {
        background: url('../../assets/tools/tiaozao.png') no-repeat;
        background-size: 100%;
      }
    }
    a.t-qrcode {
      &:before {
        background: url('../../assets/tools/qrcode.png') no-repeat;
        background-size: 100%;
      }
    }
    a.t-buy-card {
      &:before {
        background: url('../../assets/tools/buy-card.png') no-repeat;
        background-size: 100%;
      }
    }
    a.t-bind-card {
      &:before {
        background: url('../../assets/tools/card-bind.png') no-repeat;
        background-size: 100%;
      }
    }
    a.t-set {
      &:before {
        background: url('../../assets/tools/set.png') no-repeat;
        background-size: 100%;
      }
    }
  }
}
</style>

