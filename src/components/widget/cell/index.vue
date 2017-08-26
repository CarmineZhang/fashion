<template>
  <div class="cell" :class="[getClass,ceClass]" @click="cellClick">
    <div class="cell-hd">
      <slot name="header"></slot>
    </div>
    <div class="cell-bd" v-text="title">
    </div>
    <div class="cell-ft">
      <span v-if="content">{{content}}</span>
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'cell',
  props: {
    type: String,
    title: String,
    content: String,
    ceClass: {
      type: String,
      default: ''
    }
  },
  computed: {
    getClass() {
      return {
        'cell-access': this.type === 'link',
        'cell-select': this.type === 'select'
      }
    }
  },
  methods: {
    cellClick() {
      this.$emit('on-click')
    }
  }
}
</script>

