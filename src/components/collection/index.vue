<template>
  <div>
    <div class="order-goods-list" v-for="item in list" :key="item.commodityId">
      <div class="goods-img">
        <img :src="item.icon">
      </div>
      <div class="goods-info">
        <p v-text="item.name"></p>
        <p class="type"></p>
      </div>
      <div class="goods-price">
        <strong class="price">¥{{item.price}}</strong>
        <p>×1</p>
      </div>
    </div>
  </div>
</template>
<script>
import * as http from '@/services'
export default {
  name: 'collection',
  data() {
    return {
      list: []
    }
  },
  created() {
    http.queryCollection().then(res => {
      if (res.retcode === 0) {
        this.list = res.respbody.dataList
      }
    })
  }
}
</script>
