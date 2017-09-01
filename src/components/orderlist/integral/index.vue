<template>
  <div>
    <div class="header-wrapper">
      <a class="header-back" @click="back"></a>
      <div class="header-info">积分订单</div>
    </div>
    <div class="search-wrapper">
      <search-bar></search-bar>
    </div>
    <div class="o-list-wrapper">
      <div v-for="item in list" :key="item.orderID" class="list-item">
        <div class="item-header" v-text="getStatus(item.status)"></div>
        <div class="item-body-wrapper">
          <div class="order-goods-body">
            <img :src="item.icon" class="goods-img">
            <ul class="goods-info">
              <li v-text="item.commodityName" class="title"></li>
              <li class="type" v-attr="item.type"></li>
              <div class="goods-price">
                <span>
                  <em v-text="item.price"></em>积分
                </span>
                <span class="quantity">x {{item.quantity}}</span>
              </div>
            </ul>
          </div>
        </div>
        <div class="item-footer">
          共1件商品，合计¥ {{item.totalPrice}}(含运费¥ {{item.freight.toFixed(2)}})
        </div>
        <div class="item-actions">
          <a class="action" @click="cancel(item)" v-show="item.status===10">撤单</a>
          <a class="action" @click="delivery(item)" v-show="item.status===2">提货</a>
          <a class="action" @click="sale(item)" v-show="item.status===2">转售</a>
          <a class="action" @click="showExpress(item)" v-show="item.status===4">查看物流</a>
          <a class="action" @click="confirm(item)" v-show="item.status===4">确认收货</a>
          <a class="action" @click="evaluate(item)" v-show="item.status===8">评价</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SearchBar from '@/components/widget/searchbar'
import * as http from '@/services'
export default {
  name: 'integral-order-list',
  components: {
    SearchBar
  },
  data() {
    return {
      index: 1,
      list: [],
    }
  },
  created() {
    this.getIntegralOrderList()
  },
  methods: {
    back() {
      this.$router.go(-1)
    },
    getStatus(val) {
      let ret = ''
      switch (val) {
        case 2:
          ret = '已支付'
          break
        case 3:
          ret = '待发货'
          break
        case 4:
          ret = '已发货'
          break
        case 8:
          ret = '已收货'
          break
        case 9:
          ret = '已评价'
          break
        case 10:
          ret = '已寄售'
          break
        case 11:
          ret = '已完成'
          break
      }
      return ret
    },
    getIntegralOrderList() {
      http.queryIntegralOrder(this.index).then(res => {
        if (res.retcode === 0) {
          this.list = res.respbody.arrayList
        }
      })
    },
    delivery(item) {
      this.$router.push({ name: 'integral-delivery', params: { commodity: item } })
    },
    sale(item) {
      this.$router.push({
        name: 'integral-transfer', params: {
          oId: item.orderID, detailId:
          item.detailID
        }
      })
    },
    cancel(item) {
      console.log(item)
      http.integralWithdrawOrder(item.listOrderID).then(res => {
        if (res.retcode === 0) {
          this.$ve.alert('撤单成功', () => {
            this.index = 1
            this.getIntegralOrderList()
          })
        }
      })
    },
    confirm(item) {
      http.confirmReceipt(item.oderID).then(res => {
        if (res.retcode === 0) {
          this.$ve.alert('提货成功', () => {
            this.index = 1
            this.getIntegralOrderList()
          })
        }
      })
    },
    evaluate(item) {
      this.$router.push({ name: 'evaluation', params: { oId: item.orderID, cId: item.commodityID } })
    },
    showExpress(item) {
      this.$router.push({ name: 'expressstatus', query: { oId: item.orderID } })
    }
  }
}
</script>