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
    <section>
      <div class="sku" v-for="item in propertyList" :key="item.propertyID">
        <h3>{{item.propertyName}}</h3>
        <div class="sku-list">
          <a class="option" :class="{'cur':pitem.comProID===attrResult[item.propertyID]}" v-text="pitem.selector" v-for="pitem in item.propertyList" :key="pitem.propertyID" @click="selectAttr(item.propertyID,pitem.comProID)"></a>
        </div>
      </div>
    </section>
    <div class="footer-action">
      <div class="footer-desc">共一件商品</div>
      <a class="action" @click="confirm">确认提货</a>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import * as http from '@/services'
export default {
  name: 'flea-order-delivery',
  computed: {
    ...mapGetters([
      'defaultAddr'
    ])
  },
  data() {
    return {
      qty: 0,
      attrShow: false,
      propertyList: [],
      attrlist: [],
      attrResult: {}
    }
  },
  created() {
    let params = this.$store.state.route.params
    this.item = params.commodity
    if (typeof this.item === 'undefined') {
      this.$router.push('/flea/order/list')
    } else {
      http.commodityDetail(this.item.commodityID).then(res => {
        if (res.retcode === 0) {
          this.propertyList = res.respbody.propertyList
        }
      })
    }
  },
  methods: {
    selectAddress() {
      this.$router.push({ name: 'order-select-addr' })
    },
    confirm() {
      if (typeof this.defaultAddr.addrID === 'undefined') {
        this.$ve.alert('请选择收货地址')
        return
      }
      let keys = Object.keys(this.attrResult)
      if (keys.length === this.propertyList.length) {
        let attrlist = []
        keys.forEach(key => {
          attrlist.push({ comProID: this.attrResult[key].comProID })
        })
        var loading = this.$ve.loading('处理中...')
        http.fleaPickUp(this.item.orderID, this.defaultAddr.addrID, attrlist).then(res => {
          loading.hide()
          if (res.retcode === 0) {
            this.$ve.toast.success('提货成功')
            this.$router.go(-1)
          } else {
            this.$ve.alert(res.msg)
          }
        })
      } else {
        let list = this.propertyList
        for (let i = 0, len = list.length; i < len; i++) {
          if (keys.indexOf(list[i].propertyID) === -1) {
            this.$ve.alert('请选择' + list[i].propertyName)
            break;
          }
        }
      }
    },

    selectAttr(pid, aid) {
      this.$set(this.attrResult, pid, aid)
    }
  }
}
</script>
