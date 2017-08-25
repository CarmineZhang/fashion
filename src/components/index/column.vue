<template>
  <div class="home-col">
    <div class="col-header" :class="[headerClass]" v-text="cdata.title"></div>
    <div class="col-body">
      <a class="banner">
        <img v-lazy="cdata.categoryImage" alt="">
      </a>
      <div class="col-footer">
        <div class="footer-item" v-for="item in cdata.commodityList" :key="item.commodityId">
          <div class="img-wrapper">
            <img v-lazy="item.image" alt="">
          </div>
          <strong v-text="item.name"></strong>
          <span v-text="item.title"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'column',
  props: {
    headerClass: String,
    cdata: {
      type: Object,
      default: {}
    }
  }
}
</script>
<style lang="scss">
.home-col {
  background: #fff;
  margin-bottom: 10px;
  padding: 0 .17rem;
  .col-header {
    height: .86rem;
    line-height: .86rem;
    font-size: 16px;
    text-align: center;
  }
  .col-body {
    .banner {
      position: relative;
      display: block;
      padding-top: (252/716)*100%;
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: auto;
        transform: translate3d(-50%, -50%, 0)
      }
    }
  }
  .col-footer {
    height: 2.7rem;
    display: flex;
    .footer-item {
      flex: 1;
      text-align: center;
      .img-wrapper {
        position: relative;
        padding-top: (149/233)*100%;
        img {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          transform: translate3d(-50%, -50%, 0)
        }
      }
      strong {
        display: block;
        color: #333;
        font-weight: normal;
      }
      span {
        display: block;
        color: #999;
        font-size: 12px;
      }
    }
  }
}
</style>

