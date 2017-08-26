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
  name: 'flea-cart-address',
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

