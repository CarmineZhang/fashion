<template>
  <tabbar class="footer-nav" :index="selectedIndex">
    <tabbar-item path='/' textContent='首页' iconClass="nav-index" @on-click="gotoIndex"></tabbar-item>
    <tabbar-item path='/category ' textContent='分类' iconClass="nav-category" @on-click="gotoCategory"></tabbar-item>
    <tabbar-item path='/cart' textContent='购物车' iconClass="nav-cart" @on-click="gotoCart"></tabbar-item>
    <tabbar-item path='/usercenter' textContent='个人中心' iconClass="nav-me" @on-click="gotoMe"></tabbar-item>
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
      // this.$router.push('/login')
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
    background-image: url('../../assets/nav/index.png')
  }
  &.on:before {
    background-image: url("../../assets/nav/index-cur.png");
  }
}

.nav-category {
  &:before {
    background-image: url("../../assets/nav/cate.png");
  }
  &.on:before {
    background-image: url("../../assets/nav/cate-cur.png");
  }
}

.nav-cart {
  &:before {
    background-image: url("../../assets/nav/cart.png");
  }
  &.on:before {
    background-image: url("../../assets/nav/cart-cur.png");
  }
}

.nav-me {
  &:before {
    background-image: url("../../assets/nav/me.png");
  }
  &.on:before {
    background-image: url("../../assets/nav/me-cur.png");
  }
}
</style>
