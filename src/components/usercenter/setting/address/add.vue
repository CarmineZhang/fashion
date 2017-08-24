<template>
  <div>
    <add-address @on-confirm="confirm"></add-address>
  </div>
</template>
<script>
import AddAddress from '@/components/address/add'
export default {
  name: 'usercenter-add-address',
  components: {
    AddAddress
  },
  methods: {
    confirm() {
      this.$router.go(-1)
    }
  }
}
</script>
