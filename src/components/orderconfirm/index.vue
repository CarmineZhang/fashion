<template>
  <div class="order-confirm">
    <section class="order-address" @click="selectAddress">
      <p>
        <span>收货人：</span>
        <strong>12681246354</strong>
      </p>
      <p class="sub-addr">
        <span>收货地址：</span>
        <span>北京市朝阳区光华路SOHO</span>
      </p>
    </section>
    <list></list>
    <cell type="link" title="配送方式" @on-click="test"></cell>
    <cell type="link" title="选择发票抬头" @on-click="selectInvoice"></cell>
    <cell title="可用1000积分抵扣50" ce-class="order-switch">
      <my-switch slot="footer"></my-switch>
    </cell>
    <star></star>
    <div style="padding :10px;background:#fff">
      <quantity></quantity>
    </div>
    <gift></gift>
  </div>
</template>
<script>
import List from './list'
import Cell from '@/components/widget/cell'
import MySwitch from '@/components/widget/switch'
import Star from '@/components/widget/star'
import Quantity from '@/components/widget/quantity'
import Gift from '../gift'
export default {
  name: 'order-confirm',
  components: {
    List,
    Cell,
    MySwitch,
    Star,
    Quantity,
    Gift
  },
  beforeMount() {
    console.log('beforeMount')
  },
  methods: {
    selectAddress() {
      this.$router.push('/selectaddress')
    },
    selectInvoice() {
      this.$router.push('/selectinvoice')
    },
    test() {
      this.$ve.toast.text('注册成功112313123123123', 50000)
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

