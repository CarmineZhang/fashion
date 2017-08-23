<template>
  <div>
    <div class="search-wrapper">
      <search-bar></search-bar>
    </div>
    <div class="o-list-wrapper">
      <list></list>
    </div>
  </div>
</template>
<script>
import SearchBar from '../widget/searchbar/'
import List from './list'
export default {
  name: 'order-list',
  components: {
    SearchBar,
    List
  }
}
</script>
<style lang="scss">
.o-list-wrapper {
  background-color: #fff;
  padding: $searchbarHeight 10px 0;
}
</style>

