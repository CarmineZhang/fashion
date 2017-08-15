<template>
  <div class="my-header-wrap">
    <div class="my-header-avatar">
      <img src="//storage.jd.com/i.imageUpload/7a68726d3139383431343930303939373030333233_mid.jpg" alt="">
    </div>
    <div class="my-header-name">
      zhangmin
    </div>
    <div class="my-header-name">
      ID:99999
    </div>
    <div class="my-header-info">
      <div class="my-header-info-item">
        <p>9999.00</p>
        <p>我的余额</p>
      </div>
      <div class="my-header-info-item">
        <p>6666</p>
        <p>我的积分</p>
      </div>
      <div class="my-header-info-item">
        <p>100</p>
        <p>商品收藏</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'my-header'
}
</script>
<style lang="scss">
.my-header-wrap {
  margin-bottom: 10px;
  background-color: #fff;
  padding-top: 10px;
  .my-header-avatar {
    font-size: 0;
    margin: 0 auto;
    width: 60px;
    height: 60px;
    border: 1px solid hsla(0, 0%, 100%, .4);
    border-radius: 60px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, .15);
    img {
      width: 100%;
      border-radius: 60px;
    }
  }
  .my-header-name {
    text-align: center;
  }
  .my-header-info {
    display: flex;
    .my-header-info-item {
      flex: 1;
      text-align: center;
    }
  }
}
</style>


