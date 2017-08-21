<template>
  <div class="index-notice">
    <div class="notice-img">
    </div>
    <div class="notice-body">

    </div>
  </div>
</template>
<script>
export default {
  name: 'notice'
}
</script>
<style lang="scss">
.index-notice {
  background-color: #fff;
  display: flex;
  .notice-img {
    height: 55px;
    width: 60px;
    background: url('../../assets/index/notice.png') no-repeat;
    background-position: 50%;
    background-size: (77px/2);
  }
  .notice-body {
    flex: 1;
  }
}
</style>

