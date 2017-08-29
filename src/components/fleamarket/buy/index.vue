<template>
  <div>
    <div class="header-wrapper">
      <search-bar placeholder="搜索"></search-bar>
    </div>
    <swiper :list="banners"></swiper>
    <column v-for="item in columns" :key="item.categoryid" :cdata="item" @on-click="showDetail"></column>
  </div>
</template>
<script>
import Column from '../common/column'
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
  },
  methods: {
    showDetail(item) {
      this.$router.push({ name: 'flea-transfer', params: { item: item } })
    }
  }
}
</script>
