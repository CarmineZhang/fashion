<template>
  <div class="toast-wrapper">
    <div class="mask-transparent" v-show="show"></div>
    <transition name="ve-fade">
      <div class="toast " :class="toastClass" v-show="show">
        <i class="weui-icon-success-no-circle" v-show="type !== 'text'"></i>
        <p class="toast-content" v-if="content" v-html="content"></p>
        <p class="toast-content" v-else>
          <slot></slot>
        </p>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 've-toast',
  data() {
    return {
      show: false
    }
  },
  props: {
    duration: {
      type: Number,
      default: 2000
    },
    type: {
      type: String,
      default: 'text'
    },
    content: String
  },
  computed: {
    toastClass() {
      return {
        'toast-text': this.type === 'text',
        'icon-toast': this.type === 'success'
      }
    }
  },
  watch: {
    show(val) {
      if (val) {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.show = false
          this.$emit('on-hide')
        }, this.duration)
      }
    }
  }
}
</script>

