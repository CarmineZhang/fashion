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
    <list :list="goodslist"></list>
    <cell type="link" title="选择发票抬头" @on-click="selectInvoice"></cell>
    <cell title="可用1000积分抵扣50" ce-class="order-switch">
      <my-switch slot="footer"></my-switch>
    </cell>
    <div class="footer-action">
      <div class="footer-desc">共一件商品，合计</div>
      <a class="action" @click="submit()">提交订单</a>
    </div>
    <confirm-detail v-model="show" :pay-url="payUrl"></confirm-detail>
  </div>
</template>
<script>
import List from './list'
import Cell from '@/components/widget/cell'
import MySwitch from '@/components/widget/switch'
import { mapGetters } from 'vuex'
import ConfirmDetail from './confirmdetail'
import * as http from '@/services'
export default {
  name: 'confirm',
  data() {
    return {
      show: false,
      payUrl: {}
    }
  },
  computed: {
    ...mapGetters([
      'defaultAddr',
    ]),
    goodslist() {
      return this.$store.state.settlegoods
    }
  },
  components: {
    List,
    Cell,
    MySwitch,
    ConfirmDetail
  },
  methods: {
    selectAddress() {
      this.$router.push({ name: 'order-select-addr' })
    },
    selectInvoice() {
      this.$router.push('/selectinvoice')
    },
    submit() {
      let list = []
      this.goodslist.forEach(item => {
        var ob = {
          "commodityId": item.commodityId,//商品唯一标识
          "price": item.price,//商品价格
          "quantity": item.quantity//商品数量
        }
        let attrlist = item.type
        let attrret = []
        attrlist.forEach(attr => {
          attrret.push({
            comProID: attr.comProID
          })
        })
        ob.propertyList = attrret
        list.push(ob)
      })
      http.directBuy(1, 20, 0, list, 0).then(res => {
        if (res.retcode === 0) {
          this.$ve.toast.success('下单成功', () => {
            this.payUrl = res.respbody.urlList
            this.show = true
          })
        }
      })
    },
    showConfirmDetail() {
      this.show = true
    }
  }
}
</script>
<style lang="scss">
.order-confirm {
  .order-address {
    background-color: #fff;
    margin-bottom: 10px;
    padding: 10px 40px 10px 10px;
    position: relative;
    @include arrow-right();
    &::after {
      right: 15px;
    }
  }
  .sub-addr {
    font-size: 12px;
  }
}


.order-switch {
  .cell-bd {
    line-height: 32px;
  }
  .cell-ft {
    font-size: 0;
    line-height: 0;
    padding-right: 0;
  }
}
</style>
