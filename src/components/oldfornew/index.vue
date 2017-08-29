<template>
  <div>
    <ul class="nav-list">
      <li class="nav-item" :class="{'cur':type=='qq'}">
        <a href="" class="payaction" @click="pay('qq')">qq支付</a>
      </li>
      <li class="nav-item" :class="{'cur':type==='alipay'}">
        <a href="" class="payaction" @click="pay('alipay')">支付宝支付</a>
      </li>
      <li class="nav-item" :class="{'cur':type==='wechat'}">
        <a href="" class="payaction cur" @click="pay('wechat')">微信支付</a>
      </li>
    </ul>
    <div>
      <qrcode :value="payUrl" :options="{ size: 200 }"></qrcode>
    </div>
  </div>
</template>
<script>
import * as http from '@/services'
export default {
  name: 'old-for-new-service',
  data() {
    return {
      oId: 0,
      detailId: 0,
      payUrlList: null,
      payUrl: '',
      type: 'wechat'
    }
  },
  created() {
    var params = this.$store.state.route.params
    this.oId = params.oId
    this.detailId = params.detailId
  },
  methods: {
    pay(type) {
      this.type = type
      this.payUrl = this.payUrlList[type]
    },
    oldForNew() {
      http.afterSaleRenewed(this.oId, this.detailId).then(res => {
        if (res.retcode === 0) {
          this.payUrlList = res.respbody.urlList
          this.payUrl = this.payUrlList['wechat']
        }
      })
    }
  }
}
</script>
<style lang="scss">
.nav-list {
  height: 40px;
  display: flex;
  .nav-item {
    flex: 1;
    text-align: center;
    a {
      position: relative;
      display: block;
      font-size: 14px;
      height: 40px;
      line-height: 40px;
    }
  }
  .nav-item.cur {
    a {
      color: #e93b3d;
      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: #e93b3d;
      }
    }
  }
}
</style>

