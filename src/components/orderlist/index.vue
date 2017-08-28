<template>
  <div>
    <div class="search-wrapper">
      <search-bar></search-bar>
    </div>
    <div class="nav-inner">
      <ul class="nav-list">
        <li class="nav-item" :class="{'cur':status===0}">
          <a @click="getOrderList(0)">所有订单</a>
        </li>
        <li class="nav-item" :class="{'cur':status===1}">
          <a @click="getOrderList(1)">待付款</a>
        </li>
        <li class="nav-item" :class="{'cur':status===4}">
          <a @click="getOrderList(4)">待收货</a>
        </li>
        <li class="nav-item" :class="{'cur':status===5}">
          <a @click="getOrderList(5)">待评价</a>
        </li>
      </ul>
    </div>
    <div class="o-list-wrapper">
      <list :list="orderList"></list>
    </div>
  </div>
</template>
<script>
import SearchBar from '../widget/searchbar/'
import List from './list'
import * as http from '@/services'
export default {
  name: 'order-list',
  components: {
    SearchBar,
    List
  },
  data() {
    return {
      orderList: [],
      index: 1,
      status: 0,
    }
  },
  created() {
    var st = this.$store.state.route.params.status
    if (typeof st === 'undefined') {
      st = 0
    }
    this.status = st
    this.getOrders()
  },
  methods: {
    getOrders() {
      http.queryOrders(this.status, this.index).then(res => {
        if (res.retcode === 0) {
          this.orderList = res.respbody.arrayList
        }
      })
    },
    getOrderList(status) {
      this.index = 1
      this.status = status
      this.getOrders()
    }
  }
}
</script>
<style lang="scss">
.o-list-wrapper {
  background-color: #fff; // padding: $searchbarHeight + 40px 10px 0;
  padding: 0 10px;
}

.nav-inner {
  position: relative;
  background-color: #fff;
  @include bottomline();
  .nav-list {
    height: 40px;
    display: flex;
    .nav-item {
      flex: 1;
      text-align: center;
      a {
        position: relative;
        display: block;
        font-size: 14px;
        height: 40px;
        line-height: 40px;
      }
    }
    .nav-item.cur {
      a {
        color: #e93b3d;
        &:after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: #e93b3d;
        }
      }
    }
  }
}
</style>

