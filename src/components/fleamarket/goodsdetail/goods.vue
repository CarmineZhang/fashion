<template>
  <div class="goods-inner" style="width:100%">
    <swiper :list="list"></swiper>
    <div class="goods-info">
      <section>
        <p class="goods-title" v-text="goods.summary"></p>
        <p class="goods-price">
          <span>
            ¥
            <em v-text="goods.price"></em>
          </span>
        </p>
        <p class="goods-other">
          <span>快递 {{goods.delivery}}</span>
          <span>月销 {{goods.sales}}</span>
          <span>库存 {{goods.quantity}}</span>
        </p>
      </section>
      <section class="goods-comments">
        <div class="header">
          <i></i>
          <span>评价</span>
        </div>
        <div class="body">
          <p>商品评价 ({{evaluateCount}})</p>
          <comment :list="evaluateList"></comment>
          <p class="cts-more">
            <span>查看全部评价</span>
          </p>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import Swiper from '@/components/widget/swiper'
import Comment from '@/components/widget/comment'
import * as http from '@/services'
export default {
  name: 'goods',
  components: {
    Swiper,
    Comment
  },
  props: {
    goods: Object
  },
  data() {
    return {
      evaluateCount: 10,
      evaluateList: []
    }
  },
  created() {
    var id = this.$store.state.route.query.id
    http.commodityEvaluate(id, 1, 1).then(res => {
      if (res.retcode === 0) {
        this.evaluateCount = res.respbody.total
        this.evaluateList = res.respbody.list
      }
    })
  },
  computed: {
    list() {
      if (this.goods.img) {
        return this.goods.img.split(',')
      }
      return []
    }
  }
}
</script>
