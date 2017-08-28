<template>
  <div class="hello">
    <button @click="showLoading">测试</button>
    <scroll-load @load-more="loadmore" :height="600" v-model="loading">
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
    for (var i = 0; i < 10; i++) {
      this.items.push(i + "===" + Math.random().toString(16).substring(3))
    }
  },
  data() {
    return {
      items: [],
      loading: true,
      msg: 'Welcome to Your Vue.js App',
      maskShow: false
    }
  },
  methods: {
    loadmore() {
      setTimeout(() => {
        for (var i = 0; i < 50; i++) {
          this.items.push(i + "===" + Math.random().toString(16).substring(3))
        }
        this.loading = true
      }, 1000)
    },
    showLoading(){
      console.log('button')
      this.loading=true;
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



