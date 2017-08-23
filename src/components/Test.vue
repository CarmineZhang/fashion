<template>
  <div class="hello">
    <!-- <search-bar placeholder="查询所有订单"></search-bar>
                                                                                                        <swiper :list="list" @on-click="showMask"></swiper>
                                                                                                        <div class="mod-slider-mask" v-show="maskShow" @click="maskClick"></div> -->
    <scroll-load @load-more="loadmore" v-model="loading">
      <ul>
        <li v-for="(item,index) in items" :key="index">{{item}}</li>
      </ul>
    </scroll-load>
  </div>
</template>

<script>
import SearchBar from './widget/searchbar'
import Swiper from './widget/swiper'
import ScrollLoad from './widget/scrollload'
export default {
  name: 'hello',
  components: {
    SearchBar,
    Swiper,
    ScrollLoad
  },
  created() {
    for (var i = 0; i < 50; i++) {
      this.items.push(i + "===" + Math.random().toString(16).substring(3))
    }
  },
  data() {
    return {
      items: [],
      loading: true,
      msg: 'Welcome to Your Vue.js App',
      maskShow: false,
      list: [{
        href: '',
        img: 'https://m.360buyimg.com/n12/jfs/t5650/39/1969510279/230705/c0175d15/592b7e83N740a2e13.jpg!q70.jpg'
      }, {
        href: '',
        img: 'https://m.360buyimg.com/n12/jfs/t5980/365/784165297/263510/67ae0a8b/592b7e81N2683a45a.jpg!q70.jpg'
      }, {
        href: '',
        img: 'https://m.360buyimg.com/n12/jfs/t6118/153/709815207/247368/4e044731/592b7e82N34ed0798.jpg!q70.jpg'
      }]
    }
  },
  methods: {
    loadmore() {
      setTimeout(() => {
        for (var i = 0; i < 50; i++) {
          this.items.push(i + "===" + Math.random().toString(16).substring(3))
        }
        this.loading = false
        console.log(this.loading)
      }, 2000)
    },
    showMask() {
      this.maskShow = true
    },
    maskClick() {
      this.maskShow = false
    }
  }
}
</script>
<style lang="scss">
li {
  line-height: 40px;
  height: 40px;
}
</style>



