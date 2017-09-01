<template>
  <div>
    <search-bar placeholder="搜索"></search-bar>
    <swiper :list="banners"></swiper>
    <column v-for="item in columns" :key="item.categoryid" :cdata="item" @on-click="buy"></column>
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
      return this.$store.state.home.fmsalecolumns
    }
  },
  created() {
    this.$store.dispatch('getFMSaleColumns')
  },
  methods: {
    buy(item) {
      this.$router.push({ path: '/fleamarket/goods', query: { id: item.commodityId, lId: item.listOrderId } })
    }
  }
}
</script>
