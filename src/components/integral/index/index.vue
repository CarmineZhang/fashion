<template>
  <div class="integral">
    <swiper :list="banners"></swiper>
    <column v-for="item in columns" :key="item.categoryid" :cdata="item"></column>
  </div>
</template>
<script>
import Swiper from '@/components/widget/swiper/'
import Column from './column'
export default {
  name: 'home',
  components: {
    Swiper,
    Column
  },
  computed: {
    banners() {
      return this.$store.state.home.integralbanners
    },
    columns() {
      return this.$store.state.home.integralcolumns
    }
  },
  created() {
    this.$store.dispatch('getIntegralBanners')
    this.$store.dispatch('getIntegralColumns')
  }
}
</script>
<style lang="scss">
.integral {
  // background-color: #fff;
}
</style>


