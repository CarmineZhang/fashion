<template>
  <div class="my-main">
    <div class="my-fixed-header header-wrapper">
      <a class="header-back"></a>
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
  methods: {
    showSetting() {
      this.$router.push({ path: '/setting' })
    }
  }
}
</script>
<style lang="scss">
.my-main {
  padding-top: 40px;
}

.my-fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  display: flex;
  @include bottomline();
}
</style>

