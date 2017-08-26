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
    <cell type="link" title="配送方式"></cell>
    <div class="footer-action">
      <div class="footer-desc">共一件商品</div>
      <a class="action" @click="confirm">确认提货</a>
    </div>
    <confirm v-model="show"></confirm>
  </div>
</template>
<script>
import Cell from '@/components/widget/cell'
import Confirm from './confirm'
import { mapGetters } from 'vuex'
export default {
  name: 'integral-order-delivery',
  computed: {
    ...mapGetters([
      'defaultAddr'
    ])
  },
  components: {
    Cell,
    Confirm
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    selectAddress() {
      this.$router.push({ name: 'order-select-addr' })
    },
    confirm() {
      this.show = true
    }
  }
}
</script>
