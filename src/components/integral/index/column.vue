<template>
  <div class="home-col">
    <div class="col-body" @click="showDetail">
      <a class="banner">
        <img v-lazy="cdata.categoryImage" alt="">
      </a>
      <div class="col-footer integral-footer">
        <div class="footer-item" v-for="item in cdata.commodityList" :key="item.commodityId">
          <div class="img-wrapper">
            <img v-lazy="item.image" alt="">
          </div>
          <strong v-text="item.name" class="name"></strong>
          <div class="integral-price">
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
  },
  methods: {
    showDetail() {
      this.$router.push('/integralgoods')
    }
  }
}
</script>
<style lang="scss">
.integral-footer {
  .footer-item {
    max-width: 50%;
  }
  .integral-price {
    overflow: hidden;
    font-size: 12px;
    .price {
      float: left;
    }
    .count {
      float: right;
    }
  }
}
</style>

