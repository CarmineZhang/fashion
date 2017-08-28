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
    <cell title="快递单号">
      <input type="text" class="ipt">
    </cell>
    <cell title="重量">
      <input type="text" class="ipt">
    </cell>
  </div>
</template>
<script>
import Cell from '@/components/widget/cell'
import { mapGetters } from 'vuex'
export default {
  name: 'maintaince',
  components: {
    Cell
  },
  computed: {
    ...mapGetters([
      'defaultAddr'
    ])
  },
  methods: {
    selectAddress() {
      this.$router.push({ name: 'order-select-addr' })
    }
  }
}
</script>


