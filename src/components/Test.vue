<template>
  <div class="hello">
    <search-bar></search-bar>
    <swiper :list=list></swiper>
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
      list: [{
        href: '',
        img: '//img12.360buyimg.com/mcoss/jfs/t7129/165/1970328143/52203/971c96ca/599056feN88975d1c.jpg.webp'
      }, {
        href: '',
        img: '//img11.360buyimg.com/mcoss/jfs/t7369/6/288359616/58505/a993cc54/59915397N571286e1.jpg.webp'
      }, {
        href: '',
        img: '//img30.360buyimg.com/mcoss/jfs/t7843/296/189781065/58546/99f1f378/59902f78N9d95ff86.jpg.webp'
      }]
    }
  }
}
</script>

