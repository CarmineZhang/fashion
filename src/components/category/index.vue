<template>
  <div class="category">
    <div class="fixed-header">
      <category-header></category-header>
      <category-nav @on-click="getCommodity"></category-nav>
    </div>
    <scroll-load class="list-wrapper" :height="height" @load-more="loadmore" v-model="loading">
      <product-list :list="goodslist"></product-list>
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
  computed: {
    loading: {
      get() {
        return this.$store.state.goods.allowLoad
      },
      set(val) {
        this.$store.commit('GOODS_ALLOWLOAD', val)
      }
    },
    goodslist() {
      return this.$store.state.goods.list
    }
  },
  beforeMount() {
    this.height = document.documentElement.clientHeight - 86 - 50
  },
  data() {
    return {
      index: 1,
      cId: 0,
      height: 0
    }
  },
  methods: {
    getCommodity(cId) {
      this.cId = cId
      this.$store.dispatch('getCommodity', {
        cId: this.cId,
        index: 1,
        size: 10
      })
    },
    loadmore() {
      this.index = this.index + 1
      this.$store.dispatch('getCommodityMore', {
        cId: this.cId,
        index: this.index,
        size: 10
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

