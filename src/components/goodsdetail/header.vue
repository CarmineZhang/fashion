<template>
  <div class="goods-header">
    <div class="g-header-back"></div>
    <div class="g-header-nav">
      <a class="nav-item" :class="{'cur':path==='/goodsdetail/'}" @click="showGoods">
        <span>商品</span>
      </a>
      <a class="nav-item" :class="{'cur':path==='/goodsdetail/detail'}" @click="showDetail">
        <span>详情</span>
      </a>
      <a class="nav-item">
        <span>评价</span>
      </a>
    </div>
    <div class="header-cart"></div>
    <div class="header-info"></div>
  </div>
</template>
<script>
export default {
  name: 'goods-header',
  beforeMount() {
    console.log(this.$store.state.route.path)
  },
  computed: {
    path() {
      return this.$store.state.route.path
    }
  },
  methods: {
    showGoods() {
      this.$router.push({ name: 'goods' })
    },
    showDetail() {

      this.$router.push({ name: 'detail' })
    },
    showEvaluations() {
      this.$router.push({ name: 'evaluations' })
    }
  }
}
</script>
<style lang="scss">
.goods-header {
  background-color: #fff;
  display: flex;
  @include bottomline();
  .g-header-back {
    width: 40px;
    position: relative;
    @include arrow-left();
  }
  .g-header-nav {
    flex: 1;
    display: flex;
    .nav-item {
      flex: 1;
      text-align: center;
      padding: 0 5px;
      span {
        display: block;
        line-height: 40px;
        height: 40px;
        box-sizing: border-box;
      }
    }
    .cur {
      color: red;
      span {
        border-bottom: 1px solid red;
      }
    }
  }
  .header-cart {
    width: 40px;
    height: 40px;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      display: block;
      width: 25px;
      height: 25px;
      background: url('//wq.360buyimg.com/fd/base/img/detail/footbar_v20160406.png?v3') no-repeat;
      background-size: 25px;
      background-position: 0 -70px;
      transform: translate3d(-50%, -50%, 0);
    }
  }
  .header-info {
    width: 40px;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      right: 10px;
      top: 22px;
      display: block;
      width: 15px;
      height: 3px;
      background-image: url('//wq.360buyimg.com/fd/base/img/detail/sprite_detail_sku_v1.png?20160512');
      background-repeat: no-repeat;
      background-size: 15px;
      background-position: 0 0;
    }
  }
}
</style>

