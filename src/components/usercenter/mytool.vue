<template>
  <div class="my-section">
    <a class="header">
      <em>必备工具</em>
    </a>
    <ul class="my-tool">
      <li>
        <a href="">我的劵</a>
      </li>
      <li>
        <a href="">我的积分</a>
      </li>
      <li>
        <a href="">我的团队</a>
      </li>
      <li>
        <a href="">我的二维码</a>
      </li>
      <li>
        <a href="">银行卡管理</a>
      </li>
      <li>
        <a href="">售后服务</a>
      </li>
      <li>
        <a href="">购卡</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'tools'
}
</script>
<style lang="scss">
.my-tool {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  @include topline();
  li {
    flex: 0 0 25%;
    position: relative;
    @include rightline();
    @include bottomline();
    a {
      display: block;
      text-align: center;
      padding: 10px 0;
      color: #666;
    }
  }
}
</style>

