<template>
  <div class="index-wrapper">
    <index-header class="fixed-header"></index-header>
    <swiper :list="banners"></swiper>
    <my-nav></my-nav>
    <notice></notice>
    <activity></activity>
    <column v-for="(item,index) in columns" :key="index" :cdata="item"></column>
  </div>
</template>
<script>
import IndexHeader from './header'
import Swiper from '../widget/swiper/'
import MyNav from './nav'
import Notice from './notice'
import Activity from './activity'
import Column from './column'
// import * as http from '@/services'
import bannerSrc from '../../assets/index/banner.png'
import b2 from '../../assets/column/banner2@3x.png'
import b3 from '../../assets/column/banner3@3x.png'
import b4 from '../../assets/column/banner4@3x.png'
import b5 from '../../assets/column/banner5@3x.png'
import b6 from '../../assets/column/banner6@3x.png'
import c11 from '../../assets/column/c11.png'
import c12 from '../../assets/column/c12.png'
import c13 from '../../assets/column/c13.png'
import c21 from '../../assets/column/c21.png'
import c22 from '../../assets/column/c22.png'
import c23 from '../../assets/column/c23.png'
import c31 from '../../assets/column/c31.png'
import c32 from '../../assets/column/c32.png'
import c33 from '../../assets/column/c33.png'
import c41 from '../../assets/column/c41.png'
import c42 from '../../assets/column/c42.png'
import c43 from '../../assets/column/c43.png'
import c51 from '../../assets/column/c51.png'
import c52 from '../../assets/column/c52.png'
import c53 from '../../assets/column/c43.png'

export default {
  name: 'home',
  components: {
    Swiper,
    IndexHeader,
    MyNav,
    Notice,
    Activity,
    Column
  },
  data() {
    return {
      banners: [{ img: bannerSrc }, { img: bannerSrc }, { img: bannerSrc }],
      columns: [{
        title: '绅士男鞋',
        banner: b2,
        list: [{
          img: c11,
          title: '商务皮鞋',
          desc: '商务精英'
        }, {
          img: c12,
          title: '商务皮鞋',
          desc: '商务精英'
        }, {
          img: c13,
          title: '商务皮鞋',
          desc: '商务精英'
        }]
      }, {
        title: '精美女鞋',
        banner: b3,
        list: [{
          img: c21,
          title: '商务皮鞋',
          desc: '商务精英'
        }, {
          img: c22,
          title: '商务皮鞋',
          desc: '商务精英'
        }, {
          img: c23,
          title: '商务皮鞋',
          desc: '商务精英'
        }]
      }, {
        title: '时尚男包',
        banner: b4,
        list: [{
          img: c31,
          title: '商务皮鞋',
          desc: '商务精英'
        }, {
          img: c32,
          title: '商务皮鞋',
          desc: '商务精英'
        }, {
          img: c33,
          title: '商务皮鞋',
          desc: '商务精英'
        }]
      }, {
        title: '潮流女包',
        banner: b5,
        list: [{
          img: c41,
          title: '商务皮鞋',
          desc: '商务精英'
        }, {
          img: c42,
          title: '商务皮鞋',
          desc: '商务精英'
        }, {
          img: c43,
          title: '商务皮鞋',
          desc: '商务精英'
        }]
      }, {
        title: '精品配件',
        banner: b6,
        list: [{
          img: c51,
          title: '商务皮鞋',
          desc: '商务精英'
        }, {
          img: c52,
          title: '商务皮鞋',
          desc: '商务精英'
        }, {
          img: c53,
          title: '商务皮鞋',
          desc: '商务精英'
        }]
      }]
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
.index-wrapper {
  padding-top: $searchbarHeight;
  padding-bottom: $navBottomHeight;
}
</style>

