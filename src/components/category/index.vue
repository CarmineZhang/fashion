<template>
  <div class="category">
    <category-header></category-header>
    <category-nav></category-nav>
  </div>
</template>
<script>
import CategoryHeader from './header'
import CategoryNav from './nav'
export default {
  name: 'category',
  components: {
    CategoryHeader,
    CategoryNav
  }
}
</script>
<style lang="scss">
.category {
  overflow: hidden;
}
</style>

