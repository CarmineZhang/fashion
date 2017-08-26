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
    <list></list>
    <cell type="link" title="配送方式"></cell>
    <cell type="link" title="选择发票抬头" @on-click="selectInvoice"></cell>
    <cell title="可用1000积分抵扣50" ce-class="order-switch">
      <my-switch slot="footer"></my-switch>
    </cell>
    <div class="footer-action">
      <div class="footer-desc">共一件商品，合计</div>
      <a class="action" @click="showConfirmDetail">提交订单</a>
    </div>
    <confirm-detail v-model="show"></confirm-detail>
  </div>
</template>
<script>
import List from './list'
import Cell from '@/components/widget/cell'
import MySwitch from '@/components/widget/switch'
import { mapGetters } from 'vuex'
import ConfirmDetail from './confirmdetail'
export default {
  name: 'confirm',
  data() {
    return {
      show: false
    }
  },
  computed: {
    ...mapGetters([
      'defaultAddr'
    ])
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
