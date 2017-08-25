<template>
  <div class="index-wrapper">
    <index-header class="fixed-header"></index-header>
    <swiper :list="banners"></swiper>
    <my-nav></my-nav>
    <notice></notice>
    <activity></activity>
    <column v-for="item in columns" :key="item.categoryid" :cdata="item"></column>
  </div>
</template>
<script>
import IndexHeader from './header'
import Swiper from '../widget/swiper/'
import MyNav from './nav'
import Notice from './notice'
import Activity from './activity'
import Column from './column'
export default {
  name: 'home',
  components: {
    Swiper,
    IndexHeader,
    MyNav,
    Notice,
    Activity,
    Column
  },
  computed: {
    banners() {
      return this.$store.state.home.banners
    },
    columns() {
      return this.$store.state.home.columns
    }
  },
  created() {
    this.$store.dispatch('getBanners')
    this.$store.dispatch('getColumns')
  }
}
</script>
<style lang="scss">
.index-wrapper {
  padding-top: $searchbarHeight;
  padding-bottom: $navBottomHeight;
}
</style>

