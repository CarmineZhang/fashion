<template>
  <div class="my-section">
    <ul class="my-tool">
      <li>
        <a href="" class="t-jifen">积分商品</a>
      </li>
      <li>
        <a href="" class="t-firend">我的好友</a>
      </li>
      <li>
        <a href="" class="t-qrcode">我的二维码</a>
      </li>
      <li>
        <a href="" class="t-buy-card">购卡</a>
      </li>
      <li>
        <a href="" class="t-bind-card">礼品卡绑定</a>
      </li>
      <li>
        <a href="" class="t-set">设置</a>
      </li>
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
      padding: 10px 0;
      color: #999;
      font-size: 12px;
      &::before {
        width: .5rem;
        height: .5rem;
        margin: 7px auto 5px;
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
    a.t-firend {
      &:before {
        background: url('../../assets/tools/firend.png') no-repeat;
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

