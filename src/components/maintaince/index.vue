<template>
  <div>
    <section class="order-address" @click="selectAddress">
      <p>
        <span>收货人：</span>
        <strong v-text="defaultAddr.realName"></strong>
      </p>
      <p class="sub-addr">
        <span>收货地址：</span>
        <span v-text="defaultAddr.addressDetail"></span>
      </p>
    </section>
    <div class="order-goods-list">
      <div class="goods-img">
        <img :src="order.icon" alt="">
      </div>
      <div class="goods-info">
        <p v-text="order.commodityName"></p>
        <p v-attr="order.type"></p>
      </div>
      <div class="goods-price">
        <strong class="price">
          <em>¥</em>{{order.price}}</strong>
        <p>×{{order.quantity}}</p>
      </div>
    </div>
    <cell type="select" title="物流公司" :content="expressName" @on-click="showExpress"></cell>
    <cell-input title="快递单号">
      <input type="text" class="ipt" v-model="expressNo">
    </cell-input>
    <cell-input title="重量">
      <input type="text" class="ipt" v-model="weight">
    </cell-input>
    <div class="div footer-action">
      <div class="footer-desc">提交后请等待人工审核</div>
      <a class="action" @click="submit">提交订单</a>
    </div>
    <express-select v-model="show" @on-click="selectExpress"></express-select>
  </div>
</template>
<script>
import CellInput from '@/components/widget/cell/cellinput'
import Cell from '@/components/widget/cell'
import { mapGetters } from 'vuex'
import * as http from '@/services'
import ExpressSelect from './select'
export default {
  name: 'maintaince',
  components: {
    CellInput,
    Cell,
    ExpressSelect
  },
  data() {
    return {
      order: {},
      expressNo: '',
      expressName: '',
      weight: 0,
      show: false,
      shipperCode: ''
    }
  },
  created() {
    this.order = this.$store.state.route.params.item
    console.dir(this.order)
  },
  computed: {
    ...mapGetters([
      'defaultAddr'
    ])
  },
  methods: {
    showExpress() {
      this.show = true
    },
    selectExpress(item) {
      this.shipperCode = item.shipperCode
      this.expressName = item.shipperName
    },
    selectAddress() {
      this.$router.push({ name: 'order-select-addr' })
    },
    submit() {
      http.afterSaleMaintain(this.order.orderID, this.shipperCode,
        this.weight, this.expressNo).then(res => {
          if (res.retcode === 0) {
            this.$ve.toast.success('提交成功')
          }
        })
    }
  }
}
</script>


