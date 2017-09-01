<template>
  <div class="list">
    <a class="list-item" v-for="item in list" :key="item.commodityId" @click="showGoods(item)">
      <div class="pt-img">
        <img :src="item.img" alt="">
      </div>
      <p class="pt-des" v-text="item.name"></p>
      <p class="pt-price">
        <span class="price">
          ¥
          <em v-text="item.price"></em>
        </span>
        <span>月销{{item.sales}}笔</span>
      </p>
    </a>
  </div>
</template>
<script>
export default {
  name: 'product-list',
  props: {
    list: Array
  },
  methods: {
    showGoods(item) {
      // if (item.commodityType === 0) {
      this.$router.push({ name: 'goods', query: { id: item.commodityId } })
      // } else {
      //   this.$router.push({ name: 'coupons-goods', query: { id: item.commodityId } })
      // }
    }
  }
}
</script>
<style lang="scss">
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow: hidden;
  margin-top: 10px;
  .list-item {
    flex: 0 0 3.7rem;
    display: block;
    background-color: #fff;
    margin-bottom: 10px;
    text-align: center;
    overflow: hidden;
    box-sizing: border-box;
    .pt-img {
      position: relative;
      padding-top: 100%;
      height: 0;
      img {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
      }
    }
    .pt-des {
      font-size: 12px;
      margin: 10px 0;
      padding: 0 5px;
      height: 36px;
      text-align: left;
      @include ellipsisLn();
    }
    .pt-price {
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
</style>

