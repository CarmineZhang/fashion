<template>
  <div class="home-col">
    <div class="col-header" :class="[headerClass]"></div>
    <div class="col-body">
      <img src="" alt="">
      <div class="col-footer">
        <div class="footer-item">
          <img src="" alt="">
          <strong></strong>
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'column',
  props: {
    headerClass: String
  }
}
</script>
<style lang="scss">
.home-col {
  margin-bottom: 10px;
  padding: 0 10px;
  .col-header {
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
  .col-body {
    img {
      width: 100%;
    }
  }
  .col-footer {
    display: flex;
    .footer-item {
      flex: 1;
      text-align: center;
      img {
        display: block;
        width: 100%;
      }
      strong {
        display: block;
        color: #333;
      }
      span {
        display: block;
        color: #666;
      }
    }
  }
}
</style>

