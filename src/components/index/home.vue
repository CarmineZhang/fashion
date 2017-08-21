<template>
  <div>
    <swiper></swiper>
    <div class="home-nav">
      <div class="nav-item">
        <img src="" alt="">
        <span>游戏专区</span>
      </div>
      <div class="nav-item">
        <img src="" alt="">
        <span>积分商城</span>
      </div>
      <div class="nav-item">
        <img src="" alt="">
        <span>跳蚤市场</span>
      </div>
      <div class="nav-item">
        <img src="" alt="">
        <span>个人中心</span>
      </div>
      <div class="nav-item">
        <img src="" alt="">
        <span>分类</span>
      </div>
    </div>

  </div>
</template>
<script>
import Swiper from '../widget/swiper/'
// import * as http from '@/services'
export default {
  name: 'home',
  components: {
    Swiper
  },
  data() {
    return {
      banners: []
    }
  },
  created() {
    // http.getHomeBanner(1).then((res) => {
    //   if (res.retcode === 0) {
    //     this.banners = res.respbody.list
    //   }
    // })
  }
}
</script>
<style lang="scss">
.home-nav {
  display: flex;
  padding: 20px 12px 0;
  background-color: #fff;
  .nav-item {
    flex: 0 0 20%;
    text-align: center;
    img {
      display: block;
      width: 36px;
      height: 36px;
    }
    span {
      display: block;
      font-size: 12px;
      color: #666;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>

