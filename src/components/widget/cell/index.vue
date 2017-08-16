<template>
  <div class="cell" :class="getClass" @click="cellClick">
    <div class="cell-hd">
      <slot name="header"></slot>
    </div>
    <div class="cell-bd" v-text="title"></div>
    <div class="cell-ft" v-text="content"></div>
  </div>
</template>
<script>
export default {
  name: 'cell',
  props: {
    type: String,
    title: String,
    content: String
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

