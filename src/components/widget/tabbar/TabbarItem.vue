<template>
  <a href="javascript:;" class="tab-bar-item" :class="[{'on':isActive},iconClass]" @click="onItemClick()">
    {{textContent}}</a>
</template>
<script>
export default {
  name: 'tabbar-item',
  props: {
    iconClass: String,
    textContent: String,
    path: String,
    selected: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isActive() {
      let path = this.$store.state.route.path
      return path === this.path
    }
  },
  methods: {
    onItemClick() {
      this.$emit('on-click')
    }
  }
}
</script>
<style lang="scss">
.tab-bar-item {
  position: relative;
  display: block;
  flex: 1;
  text-align: center;
  line-height: 1;
  font-size: 12px;
  color: #999;
  &:before {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    margin: 7px auto 5px;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 100%;
  }

  &.on {
    color: #ffb54b;
  }
}
</style>
