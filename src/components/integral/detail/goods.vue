<template>
  <div class="goods-inner" style="width:100%">
    <swiper :list="list"></swiper>
    <div class="goods-info">
      <section>
        <p class="goods-desc" v-text="goods.summary"></p>
        <p class="goods-price">
          <strong>
            <em>¥ </em>
            <span v-text="goods.price"></span>
          </strong>
        </p>
        <p class="goods-other">
          <span>快递 {{goods.delivery}}</span>
          <span>月销 {{goods.sales}}</span>
          <span>库存 {{goods.quantity}}</span>
        </p>
      </section>
      <section>
        <!-- <cell type="select" :cell-key="item.propertyID" :title="item.propertyName" v-for="item in goods.propertyList" :key="item.propertyID" @on-click="attrClick" :content="attrResult"></cell> -->
        <div class="sku" v-for="item in goods.propertyList" :key="item.propertyID">
          <h3>{{item.propertyName}}</h3>
          <div class="sku_list">
            <a class="option" :class="{'cur':pitem.comProID===attrResult[item.propertyID]}" v-text="pitem.selector" v-for="pitem in item.propertyList" :key="pitem.propertyID" @click="selectAttr(item.propertyID,pitem.comProID)"></a>
          </div>
        </div>
      </section>
      <section>
        <quantity @on-change="changeQty"></quantity>
      </section>
      <section>
        <p>商品评价 ({{evaluateCount}})</p>
        <comment :list="evaluateList"></comment>
        <p class="more">
          查看更多
        </p>
      </section>
    </div>
    <!-- <select-attr v-model="show" :title="curAttrName" :list="attrlist" @on-click="selectAttr"></select-attr> -->
  </div>
</template>
<script>
import Swiper from '@/components/widget/swiper'
// import Cell from './cell'
import Comment from '@/components/widget/comment'
import Quantity from '@/components/widget/quantity'
// import SelectAttr from './select'
import * as http from '@/services'
export default {
  name: 'goods',
  components: {
    Swiper,
    // Cell,
    Comment,
    Quantity
    // SelectAttr
  },
  data() {
    return {
      show: false,
      attrlist: [],
      // curAttrId: 0,
      // curAttrName: '',
      attrResult: {},
      evaluateCount: 10,
      evaluateList: []
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
    // findattr(id) {
    //   var ret = this.goods.propertyList.filter(item => {
    //     return item.propertyID === id
    //   })
    //   if (ret.length > 0) {
    //     return ret[0]
    //   }
    //   return null
    // },
    // attrClick(id) {
    //   this.curAttrId = id;
    //   let attr = this.findattr(id)
    //   console.dir(attr)
    //   if (attr) {
    //     this.curAttrName = attr.propertyName
    //     this.attrlist = attr.propertyList
    //   }
    //   this.show = true
    // },
    selectAttr(pid, aid) {
      this.$emit('on-attr-change', pid, aid)
      this.$set(this.attrResult, pid, aid)
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

