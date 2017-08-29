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
    <section>
      <cell type="select" :cell-key="item.propertyID" :title="item.propertyName" v-for="item in propertyList" :key="item.propertyID" @on-click="attrClick" :content="attrResult"></cell>
    </section>
    <div class="footer-action">
      <div class="footer-desc">共一件商品</div>
      <a class="action" @click="confirm">确认提货</a>
    </div>
    <select-attr v-model="attrShow" :title="curAttrName" :list="attrList" @on-click="selectAttr"></select-attr>
  </div>
</template>
<script>
import Cell from './cell'
import SelectAttr from './select'
import { mapGetters } from 'vuex'
import * as http from '@/services'
export default {
  name: 'integral-order-delivery',
  computed: {
    ...mapGetters([
      'defaultAddr'
    ])
  },
  components: {
    Cell,
    SelectAttr
  },
  data() {
    return {
      qty: 0,
      attrShow: false,
      propertyList: [],
      attrList: [],
      curAttrId: 0,
      curAttrName: '',
      attrResult: {},
    }
  },
  created() {
    let params = this.$store.state.route.params
    this.item = params.commodity
    if (typeof this.item === 'undefined') {
      this.$router.push('/integral/order/list')
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
      let keys = Object.keys(this.attrResult)
      if (keys.length === this.propertyList.length) {
        let attrlist = []
        keys.forEach(key => {
          attrlist.push({ comProID: this.attrResult[key].comProID })
        })
        var loading = this.$ve.loading('处理中...')
        http.integralPickUp(this.item.orderID, this.item.detailID, 1, attrlist).then(res => {
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
    findattr(id) {
      var ret = this.propertyList.filter(item => {
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
        this.curAttrName = attr.propertyName
        this.attrList = attr.propertyList
      }
      this.attrShow = true
    },
    selectAttr(item) {
      this.$set(this.attrResult, this.curAttrId, item)
    }
  }
}
</script>
