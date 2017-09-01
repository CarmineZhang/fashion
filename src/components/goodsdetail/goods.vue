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
          <span class="integral">积分：{{goods.takeAccumulate}}</span>
        </p>
        <p class="goods-other">
          <span>快递 {{goods.delivery}}</span>
          <span>月销 {{goods.sales}}</span>
          <span>库存 {{goods.quantity}}</span>
        </p>
      </section>
      <section>
        <div class="sku" v-for="item in goods.propertyList" :key="item.propertyID">
          <h3>{{item.propertyName}}</h3>
          <div class="sku-list">
            <a class="option" :class="{'cur':pitem.comProID===attrResult[item.propertyID]}" v-text="pitem.selector" v-for="pitem in item.propertyList" :key="pitem.propertyID" @click="selectAttr(item.propertyID,pitem.comProID)"></a>
          </div>
        </div>
      </section>
      <section>
        <span class="quantity">数量</span>
        <quantity @on-change="changeQty" :quantity="qty" class="quantity-wrap"></quantity>
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
import Quantity from '@/components/widget/quantity'
import * as http from '@/services'
export default {
  name: 'goods',
  props: {
    qty: Number,
    attrResult: {}
  },
  components: {
    Swiper,
    Comment,
    Quantity
  },
  data() {
    return {
      show: false,
      attrlist: [],
      evaluateCount: 10,
      evaluateList: [],
    }
  },
  created() {
    var id = this.$store.state.route.query.id;
    this.$store.dispatch('getCommodityDetail', { cId: id })
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
    },
    goods() {
      return this.$store.state.goods.goods
    }
  },
  methods: {
    selectAttr(pid, aid) {
      this.$emit('on-attr-change', pid, aid)
    },
    changeQty(qty) {
      this.$emit('on-qty-change', qty)
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
  .sku-list {
    overflow: hidden;
    .option {
      padding: 0 15px;
      min-width: 20px;
      max-width: 270px;
      overflow: hidden;
      height: 25px;
      line-height: 25px;
      float: left;
      text-align: center;
      margin-left: 10px;
      margin-bottom: 10px;
      border-radius: 3px;
      color: $maincolor;
      background-color: #f3f2f8;
    }
    .cur {
      background-color: $pricecolor;
      color: #fff;
    }
  }
}
</style>

