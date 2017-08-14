<template>
  <div class="hello">
    <search-bar></search-bar>
    <swiper :list="list" @on-click="showMask"></swiper>
    <div class="mod-slider-mask" v-show="maskShow" @click="maskClick"></div>
  </div>
</template>

<script>
import SearchBar from './widget/searchbar'
import Swiper from './widget/swiper'
export default {
  name: 'hello',
  components: {
    SearchBar,
    Swiper
  },
  data() {
    return {
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
    showMask() {
      this.maskShow = true
    },
    maskClick() {
      this.maskShow = false
    }
  }
}
</script>

