<template>
  <div>
    <div class="header-wrapper">
      <search-bar placeholder="搜索"></search-bar>
    </div>
    <swiper :list="banners"></swiper>
    <column v-for="item in columns" :key="item.categoryid" :cdata="item"></column>
  </div>
</template>
<script>
import Column from '../index/column'
import SearchBar from '@/components/widget/searchbar'
import Swiper from '@/components/widget/swiper'
export default {
  name: 'flea-market-index',
  components: {
    SearchBar,
    Swiper,
    Column
  },
  computed: {
    banners() {
      return this.$store.state.home.fmbanners
    },
    columns() {
      return this.$store.state.home.fmbuycolumns
    }
  },
  created() {
    this.$store.dispatch('getFMBuyColumns')
  }
}
</script>
