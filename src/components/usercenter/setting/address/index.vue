<template>
  <div>
    <my-address choose :list="list" @on-change="chooseAddr" @on-add="addAddress" @on-edit="editAddress"></my-address>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import MyAddress from '@/components/address'
export default {
  name: 'usercenter-addrlist',
  components: {
    MyAddress
  },
  computed: {
    ...mapState({
      'list': state => state.address.list,
    })
  },
  created() {
    this.$store.dispatch('getAddrList')
  },
  methods: {
    chooseAddr() {
      this.$router.go(-1)
    },
    addAddress() {
      this.$router.push({ name: 'setting-add-address' })
    },
    editAddress(addr) {
      this.$router.push({
        name: 'setting-add-address', params: {
          addr: addr
        }
      })
    }
  }
}
</script>
