<template>
  <div class='tab-bar'>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'tabbar',
}
</script>
<style lang="scss">
.tab-bar {
  margin: 0 auto;
  height: 50px;
  display: flex;
  background-color: #fff;
  z-index: 310;
  @include topline();
}
</style>
