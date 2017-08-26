<template>
  <div class="ve-address">
    <transition name="ve-mask">
      <div class="mask mask-transparent" v-show="show"></div>
    </transition>
    <div class="mod-slide-main" :class="{'mod-slide-toggle': show}">
      <div class="mod-slide-header">
        付款详情
        <i class="close" @click="close"></i>
      </div>
      <div class="mod-slide-body">
        <ul class="mod-slide-list order-confirm">
          <li class="item">
            <div class="header">支付方式</div>
            <div class="footer">积分支付</div>
          </li>
          <li class="item">
            <div class="header">积分余额</div>
            <div class="footer">1000积分</div>
          </li>
          <li class="item">
            <div class="header">需支付</div>
            <div class="footer">500积分</div>
          </li>
        </ul>
      </div>
      <div class="mod-slide-footer">
        <a class="action">确认支付</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'integral-order-confirm',
  data() {
    return {
      show: false,
    }
  },
  props: {
    value: Boolean
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
    }
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

