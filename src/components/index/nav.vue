<template>
  <div class="home-nav">
    <div class="nav-item">
      <img src="../../assets/index/game.png" alt="">
      <span>游戏专区</span>
    </div>
    <div class="nav-item" @click="gotoIntegral">
      <img src="../../assets/index/jifen.png" alt="">
      <span>积分商城</span>
    </div>
    <div class="nav-item" @click="gotoFleaMarket">
      <img src="../../assets/index/tiaozao.png" alt="">
      <span>跳蚤市场</span>
    </div>
    <div class="nav-item" @click="gotoMe">
      <img src="../../assets/index/me.png" alt="">
      <span>个人中心</span>
    </div>
    <div class="nav-item" @click="gotoCategory">
      <img src="../../assets/index/cate.png" alt="">
      <span>分类</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'nav',
  methods: {
    gotoIntegral() {
      this.$router.push('/integral')
    },
    gotoFleaMarket() {
      // this.$router.push('/fleamarket')
      this.$router.push({ name: 'flea-sale' })
    },
    gotoMe() {
      this.$router.push('/usercenter')
    },
    gotoCategory() {
      this.$router.push('/category')
    }
  }
}
</script>
<style lang="scss">
.home-nav {
  display: flex;
  padding: 12px 12px;
  background-color: #fff;
  .nav-item {
    flex: 0 0 20%;
    text-align: center;
    img {
      margin: 0 auto 5px;
      display: block;
      width: 36px;
      height: 36px;
    }
    span {
      display: block;
      font-size: 12px;
      color: #999;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>


