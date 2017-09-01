<template>
  <div class="header-wrapper search-header-wrapper">
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

