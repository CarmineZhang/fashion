<template>
  <div>
    <my-invoice choose @on-change="chooseInvoice"></my-invoice>
  </div>
</template>
<script>
import MyInvoice from '@/components/invoice'
export default {
  name: 'select-addr',
  components: {
    MyInvoice
  },
  methods: {
    chooseInvoice(item) {
      console.log(item)
      this.$store.commit('RECEIVE_DEFAULT_INVOICE', item)
      this.$router.go(-1)
    }
  }
}
</script>
