<template>
  <div class="category">
    <div class="fixed-header">
      <category-header></category-header>
      <category-nav @on-click="getCommodity"></category-nav>
    </div>
    <scroll-load :height="height" @load-more="loadmore" v-model="allowLoading">
      <product-list class="list-wrapper" :list="goodslist"></product-list>
    </scroll-load>
  </div>
</template>
<script>
import CategoryHeader from './header'
import CategoryNav from './nav'
import ProductList from './list'
import ScrollLoad from '@/components/widget/scrollload'
import * as http from '@/services'
export default {
  name: 'category',
  components: {
    CategoryHeader,
    CategoryNav,
    ProductList,
    ScrollLoad
  },
  beforeMount() {
    this.height = document.documentElement.clientHeight - 86
  },
  data() {
    return {
      allowLoading: true,
      goodslist: [],
      index: 1,
      cId: 0,
      height: 0
    }
  },
  methods: {
    getCommodity(cId, index) {
      this.cId = cId
      http.getCommodity(cId, 1, index, 10).then(res => {
        if (res.retcode === 0) {
          let list = res.respbody.dataList
          if (list.length < 10) {
            this.allowLoading = false
          } else {
            this.allowLoading = true
          }
          this.goodslist = list
        }
      })
    },
    loadmore() {
      this.index = this.index + 1
      http.getCommodity(this.cId, 1, this.index, 10).then(res => {
        if (res.retcode === 0) {
          let list = res.respbody.dataList
          if (list.length < 10) {
            this.allowLoading = false
          } else {
            this.allowLoading = true
          }
          this.goodslist = [...this.goodslist, ...list]
        }
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

