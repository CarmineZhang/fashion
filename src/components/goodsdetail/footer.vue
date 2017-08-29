<template>
  <div class="goods-footer">
    <div class="goods-collect">
      <span @click="collection" v-text="text">收藏</span>
    </div>
    <a class="goods-action goods-cart" @click="addToCart">加入购物车</a>
    <a class="goods-action goods-buy" @click="buy">立即购买</a>
  </div>
</template>
<script>
import * as http from '@/services'
export default {
  name: 'goods-footer',
  data() {
    return {
      collectionStatus: 0
    }
  },
  computed: {
    goods() {
      return this.$store.state.goods.goods
    },
    text() {
      return this.collectionStatus === 0 ? '收藏' : '已收藏'
    }
  },
  watch: {
    goods(val) {
      this.collectionStatus = val.collection
    }
  },
  methods: {
    addToCart() {
      this.$emit('on-add-cart')
    },
    buy() {
      this.$emit('on-buy')
    },
    collection() {
      if (this.collectionStatus === 0) {
        http.addCollection(this.goods.commodityId).then(res => {
          if (res.retcode === 0) {
            this.collectionStatus = 1
          }
        })
      } else {
        http.deleteCollection(this.goods.commodityId).then(res => {
          if (res.retcode === 0) {
            this.collectionStatus = 0
          }
        })
      }
    }
  }
}
</script>
