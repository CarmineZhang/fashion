<template>
  <tabbar class="footer-nav">
    <tabbar-item selected textContent='首页' iconClass="nav-index" @on-click="gotoIndex"></tabbar-item>
    <tabbar-item textContent='分类' iconClass="nav-category" @on-click="gotoCategory"></tabbar-item>
    <tabbar-item textContent='购物车' iconClass="nav-cart" @on-click="gotoCart"></tabbar-item>
    <tabbar-item textContent='个人中心' iconClass="nav-me" @on-click="gotoMe"></tabbar-item>
  </tabbar>
</template>
<script>
import { Tabbar, TabbarItem } from '../widget/tabbar'
export default {
  name: 've-footer',
  components: {
    Tabbar,
    TabbarItem
  },
  mounted() {
    // this.gotoIndex()
  },
  methods: {
    gotoIndex() {
      this.$router.push('/')
    },
    gotoCategory() {
      this.$router.push('/category')
    },
    gotoCart() {
      this.$router.push('/cart')
    },
    gotoMe() {
      this.$router.push('/usercenter')
    }
  }
}
</script>

<style lang="scss">
.footer-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}

.nav-index {
  &:before {
    background-image: url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 40 40%22%3E%3Cpath fill=%22%23999%22 d=%22M30 38H10a6 6 0 0 1-6-6V2h32v30a6 6 0 0 1-6 6zm0-28.5a1.5 1.5 0 0 0-3 0V16a7 7 0 0 1-14 0V9.5a1.5 1.5 0 0 0-3 0V16a10 10 0 0 0 20 0V9.5z%22/%3E%3C/svg%3E");
  }
  &.on:before {
    background-image: url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 40 40%22%3E%3Cpath fill=%22%23e93b3d%22 d=%22M30 38H10a6 6 0 0 1-6-6V2h32v30a6 6 0 0 1-6 6zm0-28.5a1.5 1.5 0 0 0-3 0V16a7 7 0 0 1-14 0V9.5a1.5 1.5 0 0 0-3 0V16a10 10 0 0 0 20 0V9.5z%22/%3E%3C/svg%3E");
  }
}

.nav-category {
  &:before {
    background-image: url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 40 40%22%3E%3Cpath fill=%22%23999%22 fill-rule=%22evenodd%22 d=%22M23 37.2v-14h8c3.3 0 6 2.7 6 6v8H23zm11.3-18.5L32 16.3c-1 .6-2.3 1-3.5 1-3.5 0-6.6-2.5-7.5-6-.8-3.4 1-7 4-8.5 3.3-1.6 7-.7 9.3 2 2.3 2.8 2.3 6.8 0 9.5l2.2 2.2c.4.4.6 1 .4 1.5-.2.5-.6 1-1.2 1-.5.2-1 0-1.5-.3zM28.5 5.2c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5zM3 23.2h14v14H3v-14zm0-20h8c3.3 0 6 2.7 6 6v8H3v-14z%22/%3E%3C/svg%3E");
  }
  &.on:before {
    background-image: url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 40 40%22%3E%3Cpath fill=%22%23e93b3d%22 fill-rule=%22evenodd%22 d=%22M23 37.2v-14h8c3.3 0 6 2.7 6 6v8H23zm11.3-18.5L32 16.3c-1 .6-2.3 1-3.5 1-3.5 0-6.6-2.5-7.5-6-.8-3.4 1-7 4-8.5 3.3-1.6 7-.7 9.3 2 2.3 2.8 2.3 6.8 0 9.5l2.2 2.2c.4.4.6 1 .4 1.5-.2.5-.6 1-1.2 1-.5.2-1 0-1.5-.3zM28.5 5.2c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5zM3 23.2h14v14H3v-14zm0-20h8c3.3 0 6 2.7 6 6v8H3v-14z%22/%3E%3C/svg%3E");
  }
}

.nav-cart {
  &:before {
    background-image: url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 40 40%22%3E%3Cpath fill=%22%23999%22 d=%22M40 7l-2.3 17.8a6 6 0 0 1-6 5.2H9L4.5 4H0V1h7l1 6h32zM12 33a3 3 0 1 1-3 3 3 3 0 0 1 3-3zm20 0a3 3 0 1 1-3 3 3 3 0 0 1 3-3z%22/%3E%3C/svg%3E");
  }
}

.nav-me {
  &:before {
    background-image: url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 40 40%22%3E%3Cpath fill=%22%23999%22 d=%22M2 38v-7c0-4 8-7 18-7s18 3 18 7v7H2zm18-18a9 9 0 1 1 9-9 9 9 0 0 1-9 9z%22/%3E%3C/svg%3E");
  }
  &.on:before {
    background-image: url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 40 40%22%3E%3Cpath fill=%22%23e93b3d%22 d=%22M2 38v-7c0-4 8-7 18-7s18 3 18 7v7H2zm18-18a9 9 0 1 1 9-9 9 9 0 0 1-9 9z%22/%3E%3C/svg%3E");
  }
}
</style>
