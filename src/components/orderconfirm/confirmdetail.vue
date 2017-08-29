<template>
  <div class="ve-address">
    <transition name="ve-mask">
      <div class="mod-slide" v-show="show"></div>
    </transition>
    <div class="mod-slide-main" :class="{'mod-slide-toggle': show}">
      <div class="mod-slide-header">
        付款
        <i class="close" @click="close"></i>
      </div>
      <div class="mod-slide-body">
        <ul class="mod-slide-list order-confirm">
          <li class="item">
            <a @click="pay('qq')">qq支付</a>
            <a @click="pay('alipay')">支付宝支付</a>
            <a @click="pay('wechat')">微信支付</a>
          </li>
        </ul>
        <div>
          <qrcode :value="url" v-if="url" :options="{ size: 100 }"></qrcode>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'order-confirm',
  data() {
    return {
      show: false,
      url: ''
    }
  },
  props: {
    value: Boolean,
    payUrl: Object
  },
  watch: {
    value(val) {
      this.show = val
    },
    show(val) {
      this.$emit('input', val)
    }
  },
  methods: {
    close() {
      this.show = false
    },
    pay(type) {
      this.url = this.payUrl[type]
    }
  },
  beforeMount() {
    this.url = this.payUrl['wechat']
  }
}
</script>
<style lang="scss">
.order-confirm {
  .item {
    position: relative;
    @include bottomline();

    display: flex;
    .header {
      width: 100px;
    }
    .footer {
      flex: 1;
      text-align: right;
    }
  }
}
</style>

