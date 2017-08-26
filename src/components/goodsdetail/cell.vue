<template>
  <div class="cell" :class="[getClass,ceClass]" @click="cellClick">
    <div class="cell-hd">
      <slot name="header"></slot>
    </div>
    <div class="cell-bd" v-text="title">
    </div>
    <div class="cell-ft">
      <span v-if="getContent">{{getContent}}</span>
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
    content: Object,
    ceClass: {
      type: String,
      default: ''
    },
    cellKey: Number
  },
  computed: {
    getContent() {
      let ret = this.content[this.cellKey]
      console.dir(ret)
      if (ret) {
        console.log(ret.selector)
        return ret.selector
      }
      return ''
    },
    getClass() {
      return {
        'cell-access': this.type === 'link',
        'cell-select': this.type === 'select'
      }
    }
  },
  methods: {
    cellClick() {
      this.$emit('on-click', this.cellKey)
    }
  }
}
</script>

