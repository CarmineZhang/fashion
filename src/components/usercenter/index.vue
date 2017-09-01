<template>
  <div>
    <div class="me-header header-wrapper">
      <div class="header-info">我的</div>
    </div>
    <my-info></my-info>
    <my-order></my-order>
    <my-tool></my-tool>
  </div>
</template>
<script>
import MyInfo from './myinfo'
import MyOrder from './myorder'
import MyTool from './mytool'
export default {
  name: 'usercenter',
  components: {
    MyInfo,
    MyOrder,
    MyTool
  },
  created() {
    this.$store.dispatch('getUserInfo')
  },
  methods: {
    back() {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss">
.me-header {
  background-color: #FB000D;
  .header-info {
    color: #fff;
    margin-left: 0;
  }
}
</style>

