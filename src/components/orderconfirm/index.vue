<template>
  <div class="order-confirm">
    <section class="order-address">
      <p>
        <span>收货人：</span>
        <strong>12681246354</strong>
      </p>
      <p>
        <span>收货地址：</span>
        <span>北京市朝阳区光华路SOHO</span>
      </p>
    </section>
    <list></list>
    <cell type="link" title="选择发票抬头"></cell>
    <cell title="可用1000积分抵扣50">
      <my-switch slot="footer"></my-switch>
    </cell>
  </div>
</template>
<script>
import List from './list'
import Cell from '@/components/widget/cell'
import MySwitch from '@/components/widget/switch'
export default {
  name: 'order-confirm',
  components: {
    List,
    Cell,
    MySwitch
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
}
</style>

