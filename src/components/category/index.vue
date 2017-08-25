<template>
  <div class="category">
    <div class="fixed-header">
      <category-header></category-header>
      <category-nav @on-click="getCommodity"></category-nav>
    </div>
    <scroll-load @load-more="loadmore" v-model="loading">
      <product-list class="list-wrapper"></product-list>
    </scroll-load>
  </div>
</template>
<script>
import CategoryHeader from './header'
import CategoryNav from './nav'
import ProductList from './list'
import ScrollLoad from '@/components/widget/scrollload'
export default {
  name: 'category',
  components: {
    CategoryHeader,
    CategoryNav,
    ProductList,
    ScrollLoad
  },
  data() {
    return {
      loading: true,
      index: 1,
      cId: 0,
    }
  },
  methods: {
    getCommodity(cId, index) {
      this.cId = cId
      this.$store.dispatch('getCommidity', {
        cId: cId,
        index: index,
        size: 10
      })
    },
    loadmore() {
      this.index = this.index + 1
      this.getCommodity(this.cId, this.index).then(() => {
        console.dir(arguments)
      })
    }
  }
}
</script>
<style lang="scss">
.category {
  overflow: hidden;
}

.list-wrapper {
  padding-top: 86px;
  padding-bottom: 50px;
}
</style>

