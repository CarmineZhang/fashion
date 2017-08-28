<template>
  <div>
    <div class="header-wrapper">
      <a class="header-back"></a>
      <div class="header-info">积分订单</div>
    </div>
    <div class="search-wrapper">
      <search-bar></search-bar>
    </div>
    <div class="o-list-wrapper">
      <div v-for="item in list" :key="item.orderID">
        <div class="item-body-wrapper">
          <div class="item-body">
            <img :src="item.icon" alt="">
            <div class="content">
              <div class="info">
                <p class="title" v-text="item.commodityName"></p>
                <p class="desc" v-attr="item.type"></p>
              </div>
              <p>
                <span>
                  <em>¥ </em>
                  <span v-text="item.price"></span>
                </span>
                <span>x{{item.quantity}}</span>
              </p>
            </div>
          </div>
        </div>
        <div class="item-footer">
          共1件商品，合计¥ {{item.totalPrice}}(含运费¥ {{item.freight.toFixed(2)}})
        </div>
        <div class="item-op">
          <a class="op" @click="delivery">提货</a>
          <a class="op" @click="sale">转售</a>
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
      list: []
    }
  },
  created() {
    this.getIntegralOrderList()
  },
  methods: {
    getIntegralOrderList() {
      http.queryIntegralOrder(this.index).then(res => {
        if (res.retcode === 0) {
          this.list = res.respbody.arrayList
        }
      })
    },
    delivery() {
      this.$router.push('/integral/order/delivery')
    },
    sale() {
      this.$router.push('/integral/order/transfer')
    }
  }
}
</script>
<style lang="scss">
.o-list-wrapper {
  background-color: #fff;
  padding: $searchbarHeight+ 10px 0;
}
</style>
