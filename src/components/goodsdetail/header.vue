<template>
  <div class="header-wrapper">
    <div class="header-back" @click="back"></div>
    <div class="header-nav">
      <a class="nav-item" :class="{'cur':name==='goods'}" @click="showGoods">
        <span>商品</span>
      </a>
      <a class="nav-item" :class="{'cur':name==='detail'}" @click="showDetail">
        <span>详情</span>
      </a>
      <a class="nav-item" :class="{'cur':name==='comments'}" @click="showComments">
        <span>评价</span>
      </a>
    </div>
    <div class="header-cart"></div>
  </div>
</template>
<script>
export default {
  name: 'goods-header',
  computed: {
    name() {
      return this.$parent.currentView
    }
  },
  methods: {
    back() {
      this.$router.go(-1)
    },
    showGoods() {
      this.$emit('on-click', 'goods')
    },
    showDetail() {
      this.$emit('on-click', 'detail')
    },
    showComments() {
      this.$emit('on-click', 'comments')
    }
  }
}
</script>
<style lang="scss">
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
    background: url("../../assets/nav/cart.png") no-repeat;
    background-size: 25px;
    transform: translate3d(-50%, -50%, 0);
  }
}
</style>

