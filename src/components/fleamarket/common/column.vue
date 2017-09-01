<template>
  <div class="home-col">
    <div class="col-header" :class="[headerClass]" v-text="cdata.categoryName"></div>
    <div class="col-body">
      <div class="body">
        <div class="body-item fm-item" v-for="item in cdata.commodityList" :key="item.commodityId" @click="goodsClick(item)">
          <div class="img-wrapper">
            <img v-lazy="item.image" alt="">
          </div>
          <p v-text="item.name" class="name"></p>
          <div class="fm-price">
            <span class="price">
              ¥
              <em v-text="item.price"></em>
            </span>
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
.home-col {
  .col-body {
    .fm-item {
      max-width: 50%;
      .fm-price {
        font-size: 12px;
        padding: 0 5px;
        display: flex;
        margin: 5px 0;
        .price {
          display: inline-block;
          color: $pricecolor;
          font-weight: 700;
          line-height: 1.3;
          text-align: left;
          em {
            font-size: 16px;
          }
        }

        span {
          flex: 1;
          text-align: right
        }
      }
    }
  }
}
</style>

