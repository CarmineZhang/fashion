<template>
  <div>
    <div class="header-wrapper">
      <div class="header-back"></div>
      <div class="header-info">物流状态</div>
    </div>
    <p>
      <span>物流公司代码：</span>
      <span v-text="expressStatus.shipperCode"></span>
    </p>
    <p>
      <span>配送方式：</span>
      <span v-text="expressStatus.shippingMode"></span>
    </p>
    <p>
      <span>重量：</span>
      <span>{{expressStatus.weight}} {{expressStatus.weightUnit}}</span>
    </p>
    <p>
      <span>快递单号：</span>
      <span v-text="expressStatus.trackingNo"></span>
    </p>
  </div>
</template>
<script>
import * as http from '@/services'
export default {
  name: 'express',
  data() {
    return {
      oId: 0,
      expressStatus: {}
    }
  },
  created() {
    let query = this.$store.state.route.query
    if (query.oId) {
      this.oId = query.oId
    }
  },
  methods: {
    getExpressStatus() {
      http.queryLogistics().then(res => {
        if (res.retcode === 0) {
          this.expressStatus = res.respbody
        }
      })
    }
  }
}
</script>

