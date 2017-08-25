<template>
  <div class="category-nav-wrapper" v-scroll>
    <ul class="category-nav">
      <li :class="{'cur':current===index}" v-for="(item,index) in list" :key="index" @click="navClick(item,index)">
        <span v-text="item.categoryName"></span>
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
      current: 0,
      curCategoryId: 0,
      distance: 0,
    }
  },
  computed: {
    list() {
      return this.$store.state.category.categories
    }
  },
  created() {
    this.$store.dispatch('getCategory').then(() => {
      console.dir(arguments)
      if (this.list.length > 0) {
        this.curCategoryId = this.list[0].categoryId
        this.$emit('on-click', this.curCategoryId, 1)
      }
    })
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
    navClick(item, index) {
      this.current = index
      this.curCategoryId = item.categoryId
      scroll.setDistance(index)
      this.$emit('on-click', this.curCategoryId, 1)
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
      color: #ffb54b;
      span {
        border-bottom: 2px solid #ffb54b;
      }
    }
  }
}
</style>
