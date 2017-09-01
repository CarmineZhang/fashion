<template>
  <div>
    <section class="select-addr" @click="selectAddress">
      <ul>
        <li>
          <span>收货人：</span>
          <span v-text="defaultAddr.realName"></span>
          <span class="mobile" v-text="defaultAddr.mobile"></span>
        </li>
        <li>
          <span v-attr-detail="defaultAddr"></span>
        </li>
      </ul>
    </section>
    <list :list="goodslist"></list>
    <cell type="link" title="选择发票抬头" :content="invoice.header" @on-click="selectInvoice"></cell>
    <cell :title="integralTitle" ce-class="order-switch">
      <my-switch slot="footer" :checked="integralCheck===1" @on-click="useIntegral"></my-switch>
    </cell>
    <cell title="使用购物卡" ce-class="order-switch">
      <my-switch slot="footer" :checked="couponsCheck===1" @on-click="showCoupons"></my-switch>
    </cell>
    <div class="coupons-list" v-show="couponsShow">
      <checklist :list="couponsList" @on-change="selectCoupons"></checklist>
    </div>
    <div class="footer-action">
      <div class="footer-desc">合计:
        <span class="price">
          ¥
          <em v-text="amount"></em>
        </span>
      </div>
      <a class="action" @click="submit()">提交订单</a>
    </div>
    <confirm-detail v-model="show" :pay-url="payUrl"></confirm-detail>
  </div>
</template>
<script>
import List from './list'
import Cell from '@/components/widget/cell'
import Checklist from './checklist'
import MySwitch from '@/components/widget/switch'
import { mapGetters } from 'vuex'
import ConfirmDetail from './confirmdetail'
import * as http from '@/services'
export default {
  name: 'confirm',
  data() {
    return {
      show: false,
      amountIntegral: 0,
      intergralToMoney: 0,
      count: 0,
      payUrl: {},
      integralCheck: 0,
      couponsCheck: 0,
      currentIntegral: 0,
      couponsShow: false,
      couponsList: [],
      checkedCouponsList: []
    }
  },
  created() {
    http.queryFirmIntegral().then(res => {
      if (res.retcode === 0) {
        this.currentIntegral = res.respbody.accumulate
      }
    })
  },
  computed: {
    ...mapGetters([
      'defaultAddr'
    ]),
    invoice() {
      return this.$store.state.invoice
    },
    goodslist() {
      return this.$store.state.settlegoods
    },
    amount() {
      let ret = 0, integralRet = 0, retcount = 0, integralMoney = 0
      this.goodslist.forEach(item => {
        ret += item.price * item.quantity
        integralRet += item.payAccumulate * item.quantity
        integralMoney += item.payAccumulate * item.quantity * item.accumulateRate
        retcount += item.quantity
      })
      this.count = retcount
      this.amountIntegral = integralRet
      this.intergralToMoney = integralMoney
      return ret
    },
    integralTitle() {
      return '可使用' + this.amountIntegral + '积分兑换' + this.intergralToMoney
    }
  },
  components: {
    List,
    Cell,
    MySwitch,
    ConfirmDetail,
    Checklist
  },
  methods: {
    selectAddress() {
      this.$router.push({ name: 'order-select-addr' })
    },
    selectInvoice() {
      this.$router.push({ name: 'order-select-invoice' })
    },
    selectCoupons(val) {
      console.log(val)
      this.checkedCouponsList = val
    },
    showCoupons(checked) {
      if (checked) {
        console.log('checked')
        this.couponsCheck = 1
        http.queryCoupons().then(res => {
          if (res.retcode === 0) {
            this.couponsShow = true
            this.couponsList = res.respbody.dataList.filter(item => {
              return item.status === 1 || item.status === 2
            })
          }
        })
      } else {
        this.couponsCheck = 0
        this.couponsShow = false
      }
    },
    useIntegral(checkecd) {
      if (checkecd) {
        if (this.currentIntegral >= this.amountIntegral) {
          this.integralCheck = 1
        } else {
          this.integralCheck = 0
          this.$ve.toast.text('当前积分不够抵扣')
        }
      } else {
        this.integralCheck = 0
      }
    },
    submit() {
      if (!this.defaultAddr.addrID) {
        this.$ve.alert('请选择地址')
        return
      }
      if (this.couponsCheck && this.checkedCouponsList.length == 0) {
        this.$ve.alert('请选择购物卡或者取消购物卡支付')
        return
      }
      let list = [],
        cartDetaiLID = []
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
        if (item.detailID) {
          cartDetaiLID.push(item.detailID)
        }
        ob.propertyList = attrret
        list.push(ob)
      })
      http.directBuy(this.defaultAddr.addrID, this.amount, this.integralCheck, this.integralCheck && this.invoice.infoId, list, this.integralCheck, cartDetaiLID, this.couponsCheck, this.checkedCouponsList).then(res => {
        if (res.retcode === 0) {
          this.$ve.toast.success('下单成功', () => {
            this.payUrl = res.respbody.urlList
            this.show = true
          })
        }
      })
    }
  }
}
</script>
<style lang="scss">
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
