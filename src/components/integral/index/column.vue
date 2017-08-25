<template>
  <div class="home-col">
    <div class="col-body">
      <a class="banner">
        <img v-lazy="cdata.categoryImage" alt="">
      </a>
      <div class="col-footer">
        <div class="footer-item" v-for="item in cdata.commodityList" :key="item.commodityId">
          <div class="img-wrapper">
            <img v-lazy="item.image" alt="">
          </div>
          <span v-text="item.name"></span>
          <div class="integral-footer">
            <span class="price">{{item.price}}积分</span>
            <span class="count">月销{{item.sales}}笔</span>
          </div>
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
.integral-footer {
  overflow: hidden;
  font-size: 12px;
  .price {
    float: left;
  }
  .count {
    float: right;
  }
}
</style>

