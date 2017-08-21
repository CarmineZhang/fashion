<template>
  <div class="ve-address">
    <transition name="ve-mask">
      <div class="mask mask-transparent" v-show="show"></div>
    </transition>
    <div class="mod-slide-main" :class="{'mod-slide-toggle': show}">
      <div class="mod-slide-header">
        选择地区
        <i class="close" @click="close"></i>
      </div>
      <div class="mod-slide-body">
        <ul class="mod-slide-list cart-address-list">
          <li class="item cur">北京</li>
          <li class="item">海淀</li>
          <li class="item">清河</li>
          <li class="item">永泰</li>
          <li class="operator">
            <a class="add">新增地址</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'cart-address',
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
.cart-address-list {
  .item {
    position: relative;
    padding: 17px 25px 17px 30px;
    @include bottomline();
    &:before {
      @include select();
      left: 0;
    }
  }
  li.cur {
    color: #ffb54b;
    &:before {
      @include selected();
      left: 0;
    }
  }
  .operator {
    padding: 0;
    text-align: center;
    .add {
      position: relative;
      display: inline-block;
      height: 45px;
      line-height: 45px;
      padding-right: 40px;
      &:after {
        position: absolute;
        right: 0;
        top: 50%;
        content: "";
        display: block;
        width: 25px;
        height: 25px;
        transform: translate3d(0, -50%, 0);
        background-position: -25px 0;
        background-image: url("../../assets/address.png");
        background-repeat: no-repeat;
        background-size: 100px 100px;
      }
    }
  }
}
</style>

