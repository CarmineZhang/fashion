<template>
  <div class="category-nav-wrapper" v-scroll>
    <ul class="category-nav">
      <li :class="{'cur':current===index}" v-for="(item,index) in list" :key="index" @click="navClick(index)">
        <span v-text="item.name"></span>
      </li>
    </ul>
  </div>
</template>
<script>
import Scroll from './scroll'
let scroll
export default {
  name: 'category-nav',
  data() {
    return {
      list: {},
      current: 0,
      distance: 0
    }
  },
  created() {
    setTimeout(() => {
      this.list = [{
        id: 1,
        name: '女鞋'
      }, {
        id: 1,
        name: '男鞋'
      }, {
        id: 1,
        name: '手机'
      }, {
        id: 1,
        name: '电脑'
      }, {
        id: 1,
        name: '服装'
      }, {
        id: 1,
        name: '鞋帽'
      }, {
        id: 1,
        name: '空调'
      }, {
        id: 1,
        name: '电视机'
      }, {
        id: 1,
        name: '电冰箱'
      }, {
        id: 1,
        name: '户外用品'
      }]
    }, 300);
  },
  directives: {
    scroll: {
      inserted(el) {
        scroll = new Scroll(el)
      },
      componentUpdated() {
        scroll.init()
      },
      unbind() {
        scroll && scroll.destory()
      }
    }
  },
  methods: {
    navClick(index) {
      this.current = index
      scroll.setDistance(index)
    }
  }
}
</script>

<style lang="scss">
.category-nav-wrapper {
  background-color: #fff;
  position: relative;
  @include bottomline();
  .category-nav {
    height: 40px;
    display: flex;
    background-color: #fff;
    li {
      flex: 0 0 80px;
      span {
        height: 40px;
        line-height: 40px;
        display: block;
        margin: 0 5px;
        text-align: center;
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
}
</style>
