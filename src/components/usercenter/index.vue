<template>
  <div class="main">
    <div class="my-fixed-header">
      <a class="header-left" @click="showSetting">设置</a>
      <a class="header-right">消息</a>
    </div>
    <my-header></my-header>
    <my-order></my-order>
    <my-tool></my-tool>
    <div class="my-section">
      <a class="header header-access" @click="showSetting">
        <em>设置</em>
      </a>
    </div>
  </div>
</template>
<script>
import MyHeader from './myheader'
import MyOrder from './myorder'
import MyTool from './mytool'
export default {
  name: 'usercenter',
  components: {
    MyHeader,
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
.main {
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
  .header-left {
    flex: 1;
    padding-left: 10px;
  }
  .header-right {
    flex: 1;
    padding-right: 10px;
    text-align: right;
  }
}
</style>

