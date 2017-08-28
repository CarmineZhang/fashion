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
  data() {
    return {
      show: false,
      attrlist: [],
      curAttrId: 0,
      curAttrName: '',
      attrResult: {},
      evaluateCount: 10,
      evaluateList: [{
        "userName": "rel****124",//用户名称
        "userImage": "http://192.168.1.213/resources/e8d459ff-498a-45f9-8551-60133f87caa1002.jpg",//用户头像
        "content": "做工扎实，使用高档", //评价
        "images": "http://192.168.1.213/resources/e8d459ff-498a-45f9-8551-60133f87caa1002.jpg,http://192.168.1.213/resources/e8d459ff-498a-45f9-8551-60133f87caa1002.jpg,http://192.168.1.213/resources/e8d459ff-498a-45f9-8551-60133f87caa1002.jpg", //上传的图片
        "productParameter": [{
          "comProID": 12,
          "propertyName": "颜色选择",
          "selector": "白色"
        }, {
          "comProID": 26,
          "propertyName": "尺码选择",
          "selector": "S"
        }]
      }, {
        "userName": "rel****124",//用户名称
        "userImage": "http://192.168.1.213/resources/e8d459ff-498a-45f9-8551-60133f87caa1002.jpg",//用户头像
        "content": "做工扎实，使用高档", //评价
        "images": "http://192.168.1.213/resources/e8d459ff-498a-45f9-8551-60133f87caa1002.jpg,http://192.168.1.213/resources/e8d459ff-498a-45f9-8551-60133f87caa1002.jpg,http://192.168.1.213/resources/e8d459ff-498a-45f9-8551-60133f87caa1002.jpg", //上传的图片
        "productParameter": [{
          "comProID": 12,
          "propertyName": "颜色选择",
          "selector": "白色"
        }, {
          "comProID": 26,
          "propertyName": "尺码选择",
          "selector": "S"
        }],
      }]
    }
  },
  created() {
    var id = this.$store.state.route.query.id;
    this.$store.dispatch('getCommodityDetail', { cId: id })
    http.commodityEvaluate(id, 1, 1).then(res => {
      if (res.retcode === 0) {
        // this.evaluateCount = res.respbody.total
        // this.evaluateList = res.respbody.list
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
