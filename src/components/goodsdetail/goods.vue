<template>
  <div class="goods-inner">
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
        <cell type="select" :cell-key="item.propertyID" :title="item.name" v-for="item in goods.propertyList" :key="item.propertyID" @on-click="attrClick" :content="attrResult"></cell>
      </section>
      <section>
        <p>商品评价</p>
        <comment></comment>
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
import Comment from './comment'
import SelectAttr from './select'
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
      attrResult: {}
    }
  },
  computed: {
    list() {
      if (this.goods.img) {
        return this.goods.img.split(',')
      }
      return []
    },
    goods() {
      // return this.$store.state.goods.goods
      return {
        "propertyList": [{
          "propertyID": 1,
          "name": "产品参数",
          "list": [{
            "comProID": 1,//属性ID
            "selector": "170mm" //属性
          }, {
            "comProID": 2,//属性ID
            "selector": "180mm" //属性
          }]
        }, {
          "propertyID": 2,
          "name": "颜色分类",
          "list": [{
            "comProID": 12,//属性ID
            "selector": "红色" //属性
          }, {
            "comProID": 13,//属性ID
            "selector": "蓝色" //属性
          }]
        }]
      }
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
      if (attr) {
        this.curAttrName = attr.name
        this.attrlist = attr.list
      }
      this.show = true
    },
    selectAttr(item) {
      this.$set(this.attrResult, this.curAttrId, item)
    }
  }
}
</script>