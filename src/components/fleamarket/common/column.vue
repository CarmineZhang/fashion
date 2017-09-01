<template>
  <div class="home-col">
    <div class="col-header" :class="[headerClass]" v-text="cdata.categoryName"></div>
    <div class="col-body">
      <div class="body">
        <div class="body-item" v-for="item in cdata.commodityList" :key="item.commodityId" @click="goodsClick(item)">
          <div class="img-wrapper">
            <img v-lazy="item.image" alt="">
          </div>
          <p v-text="item.name" class="name"></p>
          <div class="fm-price">
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
    goodsClick(item) {
      this.$emit('on-click', item)
    }
  }
}
</script>
<style lang="scss">
.fm-footer {
  .footer-item {
    max-width: 50%;
  }
  .fm-price {
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

