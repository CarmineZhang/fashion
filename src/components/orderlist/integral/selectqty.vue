<template>
  <div>
    <transition name="ve-mask">
      <div class="mod-slide" v-show="show"></div>
    </transition>
    <div class="mod-slide-main" :class="{'mod-slide-toggle': show}">
      <div class="mod-slide-header">
        选择数量
        <i class="close" @click="close"></i>
      </div>
      <div class="mod-slide-body">
        <ul class="mod-slide-list order-confirm">
          <li class="item">
            <div class="header">数量</div>
            <div class="footer">
              <input type="tel" class="ipt" v-model="qty">
            </div>
          </li>
        </ul>
      </div>
      <div class="mod-slide-footer">
        <a class="action" @click="confirm">确定</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'select-qty',
  props: {
    max: Number,
    value: Boolean
  },
  data() {
    return {
      qty: 1,
      show: false
    }
  },
  watch: {
    qty(val) {
      if (val > this.max) {
        this.qty = this.max
      }
    },
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
    confirm() {
      this.$emit('on-confirm', this.qty)
      this.close()
    }
  }
}
</script>
