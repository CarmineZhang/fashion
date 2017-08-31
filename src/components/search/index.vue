<template>
  <div>
    <scroll-load :height="height" @load-more="loadmore" v-model="allowLoading">
      <product-list :list="goodslist"></product-list>
    </scroll-load>
  </div>
</template>
<script>
import ProductList from '../category/list'
import ScrollLoad from '@/components/widget/scrollload'
import * as http from '@/services'
export default {
  name: 'category',
  components: {
    ProductList,
    ScrollLoad
  },
  beforeMount() {
    this.height = document.documentElement.clientHeight - 86 - 50
  },
  data() {
    return {
      allowLoading: true,
      goodslist: [],
      index: 1,
      cId: 0,
      height: 0,
      key: ''
    }
  },
  created() {
    let key = this.$store.state.route.query.key
    this.key = key
    this.searchCommodity()
  },
  methods: {
    searchCommodity() {
      http.commoditySearch(this.key, this.index, 10).then(res => {
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
      http.commoditySearch(this.key, this.index, 10).then(res => {
        if (res.retcode === 0) {
          let list = res.respbody.dataList
          if (list.length < 10) {
            this.allowLoading = false
          } else {
            this.allowLoading = true
          }
          list.forEach(item => {
            this.goodslist.push(item)
          })
          // this.goodslist = [...this.goodslist, ...list]
        }
      })
    }
  }
}
</script>
