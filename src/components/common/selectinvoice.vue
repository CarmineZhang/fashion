<template>
  <div>
    <my-invoice choose @on-change="chooseInvoice"></my-address>
  </div>
</template>
<script>
import MyInvoice from '../address'
export default {
  name: 'select-addr',
  components: {
    MyInvoice
  },
  methods: {
    chooseInvoice(item) {
      this.$store.commit('RECEIVE_DEFAULT_INVOICE', item)
      this.$router.go(-1)
    }
  }
}
</script>
