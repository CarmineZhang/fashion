<template>
  <div class="main">
    <div class="fixed-header">
      <a href="" class="header-left">设置</a>
      <a href="" class="header-right">消息</a>
    </div>
    <my-header></my-header>
    <my-order></my-order>
    <my-tool></my-tool>
    <div class="my-section">
      <a class="header header-access">
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
  }
}
</script>
<style lang="scss">
.main {
  padding-top: 40px;
}

.fixed-header {
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

