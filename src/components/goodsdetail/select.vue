<template>
  <div>
    <transition name="ve-mask">
      <div class="mod-slide" v-show="show"></div>
    </transition>
    <div class="mod-slide-main" :class="{'mod-slide-toggle': show}">
      <div class="mod-slide-header">
        {{title}}
        <i class="close" @click="close"></i>
      </div>
      <div class="mod-slide-body">
        <ul class="mod-slide-list select-attr">
          <li class="item" v-for="item in list" :key="item.comProID" v-text="item.selector" @click="selectAttr(item)">
          </li>
        </ul>
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
    value: Boolean,
    title: String,
    list: {
      type: Array,
      default: () => []
    }
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
    selectAttr(item) {
      this.close();
      this.$emit('on-click', item)
    }
  }
}
</script>
<style lang="scss">
.select-attr {
  .item {
    position: relative;
    @include bottomline();
  }
}
</style>

