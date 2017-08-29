<template>
  <div class="goods-inner" style="width:100%">
    <swiper :list="list"></swiper>
    <div class="goods-info">
      <section>
        <p class="goods-desc" v-text="goods.summary"></p>
        <p class="goods-price">
          <strong>
            <span v-text="goods.price"></span>
            <span>积分</span>
          </strong>
        </p>
        <p class="goods-other">
          <span>快递 {{goods.delivery}}</span>
          <span>月销 {{goods.sales}}</span>
          <span>库存 {{goods.quantity}}</span>
        </p>
      </section>
      <section>
        <p>商品评价 ({{evaluateCount}})</p>
        <comment :list="evaluateList"></comment>
        <p class="more">
          查看更多
        </p>
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
<style lang="scss">
.sku {
  position: relative;
  padding-left: 80px;
  margin: 5px 0;
  h3 {
    position: absolute;
    top: 20px;
    left: 0;
    line-height: 1.2;
    transform: translateY(-50%);
    font-size: 12px;
    font-weight: 400;
    color: #999;
  }
  .sku_list {
    overflow: hidden;
    .option {
      float: left;
      position: relative;
      padding: 5px 10px 4px;
      margin: 5px 10px 5px 0;
      min-width: 30px;
      border-radius: 2px;
      text-align: center;
      word-break: break-all;
      font-size: 14px;
      color: #333;
      background-color: #fff;
    }
    .cur {
      color: #e4393c;
    }
  }
}
</style>

