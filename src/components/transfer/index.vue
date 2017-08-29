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
  methods: {
    sale() {
      http.integralSales()
    }
  }
}
</script>
<style lang="scss" scoped>
.transfer-action {
  width: 100%;
}
</style>

