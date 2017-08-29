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
        <p>没人限购10件</p>
        <p>满78元包邮</p>
      </section>
      <section>
        <cell type="select" :cell-key="item.propertyID" :title="item.propertyName" v-for="item in goods.propertyList" :key="item.propertyID" @on-click="attrClick" :content="attrResult"></cell>
      </section>
      <section>
        <p>商品评价 ({{evaluateCount}})</p>
        <comment :list="evaluateList"></comment>
        <p class="more">
          查看更多
        </p>
      </section>
    </div>
    <select-attr v-model="show" :title="curAttrName" :list="attrlist" @on-click="selectAttr"></select-attr>
  </div>
</template>
<script>
import Swiper from '@/components/widget/swiper'
import Cell from './cell'
import Comment from '@/components/widget/comment'
import SelectAttr from './select'
import * as http from '@/services'
export default {
  name: 'goods',
  components: {
    Swiper,
    Cell,
    Comment,
    SelectAttr
  },
  data() {
    return {
      show: false,
      attrlist: [],
      curAttrId: 0,
      curAttrName: '',
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
    findattr(id) {
      var ret = this.goods.propertyList.filter(item => {
        return item.propertyID === id
      })
      if (ret.length > 0) {
        return ret[0]
      }
      return null
    },
    attrClick(id) {
      this.curAttrId = id;
      let attr = this.findattr(id)
      console.dir(attr)
      if (attr) {
        this.curAttrName = attr.propertyName
        this.attrlist = attr.propertyList
      }
      this.show = true
    },
    selectAttr(item) {
      this.$set(this.attrResult, this.curAttrId, item)
    }
  }
}
</script>
