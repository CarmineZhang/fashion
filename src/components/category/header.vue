<template>
  <div class="search-wrapper">
    <div class="header-back"></div>
    <search-bar></search-bar>
  </div>
</template>
<script>
import SearchBar from '../widget/searchbar'
export default {
  name: 'category-header',
  components: {
    SearchBar
  }
}
</script>
<style lang="scss">
.header-back {
  width: 40px;
  position: relative;
  background: #fdb34b;
  @include arrow-left(10px, #fff);
}
</style>

