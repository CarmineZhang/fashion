<template>
  <div class="hello">
    <search-bar></search-bar>
  </div>
</template>

<script>
import SearchBar from './widget/searchbar'
export default {
  name: 'hello',
  components: {
    SearchBar
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

