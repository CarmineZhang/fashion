<template>
  <div>
    <my-header></my-header>
    <router-view></router-view>
  </div>
</template>
<script>
import MyHeader from './header'
export default {
  name: 'flea-market-index',
  components: {
    MyHeader
  },
  created() {
    this.$store.dispatch('getFleaMarketBanners')
  }
}
</script>
