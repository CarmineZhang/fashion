<template>
  <div>
    <div class="header-wrapper">
      <a class="header-back"></a>
      <div class="header-nav">
        <a class="nav-item" :class="{'cur':flag===2}" @click="showSale">
          <span>转售中</span>
        </a>
        <a class="nav-item" :class="{'cur':flag===1}" @click="showBuy">
          <span>求购到</span>
        </a>
      </div>
    </div>
    <div class="search-wrapper">
      <search-bar></search-bar>
    </div>
    <div class="o-list-wrapper">
      <div v-for="item in list" :key="item.orderID" class="list-item">
        <div class="item-header" v-text="getStatus(item.status)"></div>
        <div class="item-body-wrapper">
          <div class="order-goods-body">
            <img :src="item.icon" alt="" class="goods-img">
            <ul class="goods-info">
              <li v-text="item.commodityName" class="title"></li>
              <li class="type" v-attr="item.type"></li>
              <div class="goods-price">
                <span>
                  ¥
                  <em v-text="item.price"></em>
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
          <a class="action" @click="delivery(item)" v-show="flag ===1&&(item.status===2||item.status===3)">提货</a>
          <a class="action" @click="cancelOrder(item)" v-show="flag ===1&&item.status===1">撤单</a>
          <a class="action" @click="confirm(item)" v-show="flag ===1&&item.status===5">确认收货</a>
          <a class="action" @click="showExpress(item)" v-show="flag ===1&&item.status===5">查看物流</a>
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
      flag: 2,
      list: []
    }
  },
  created() {
    this.getFleaOrderList()
  },
  methods: {
    getStatus(val) {
      let ret = ''
      switch (val) {
        case 1:
          ret = '已委托'
          break
        case 2:
          ret = '已成交'
          break
        case 3:
          ret = '已撤单'
          break
        case 4:
          ret = '已提货'
          break
        case 5:
          ret = '已发货'
          break
        case 6:
          ret = '确认收货'
          break
      }
      return ret
    },
    getFleaOrderList() {
      http.queryFleaOrder(this.flag, this.index).then(res => {
        if (res.retcode === 0) {
          this.list = res.respbody.arrayList
        }
      })
    },
    showSale() {
      this.flag = 2
      this.index = 1
      this.getFleaOrderList()
    },
    showBuy() {
      this.flag = 1
      this.index = 1
      this.getFleaOrderList()
    },
    delivery(item) {
      this.$router.push({ name: 'integral-delivery', params: { commodity: item } })
    },
    confirm(item) {
      http.fleaConfirmReceipt(item.orderID).then(res => {
        if (res.retcode === 0) {
          this.$ve.alert('撤单成功', () => {
            this.showBuy()
          })
        } else {
          this.$ve.alert(res.msg)
        }
      })
    },
    cancelOrder(item) {
      http.withdrawOrder(item.listOrderID).then(res => {
        if (res.retcode === 0) {
          this.$ve.alert('撤单成功', () => {
            this.showBuy()
          })
        } else {
          this.$ve.alert(res.msg)
        }
      })
    },
    showExpress(item) {
      this.$router.push({ name: 'flea-expressstatus', query: { oId: item.orderID } })
    }
  }
}
</script>