<template>
  <div>
    <div class="header-wrapper">
      <a class="header-back"></a>
      <div class="header-info">一键转让</div>
    </div>
    <section>
      <p>当前价格</p>
      <p>32000</p>
      <p>该商品平均售卖周期：3日</p>
    </section>
    <div class="footer-action">
      <a class="action transfer-action" @click="sale">一键转让</a>
    </div>
  </div>
</template>
<script>
import * as http from '@/services'
export default {
  name: 'integral-order-transfer',
  created() {
    let params = this.$store.state.route.params
    console.dir(params)
    this.oId = params.oId
    this.detailId = params.detailId
  },
  data() {
    return {
      oId: 0,
      detailId: 0,
      qty: 0,
    }
  },
  methods: {
    sale() {
      http.integralSales(this.oId, this.detailId).then(res => {
        if (res.retcode === 0) {
          this.$ve.toast.success('转售成功', () => {
            this.$router.go(-1)
          })
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.transfer-action {
  width: 100%;
}
</style>

