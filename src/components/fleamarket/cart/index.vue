<template>
  <div class="main cart">
    <cart-header @on-edit="edit" @on-address="selectAddress"></cart-header>
    <div class="cart-wrap">
      <div class="cart-item" v-for="(item,index) in list" :key="index">
        <div class="icon-select" :class="{'selected':item.selected}" @click="setSelected(item)">
        </div>
        <div class="goods-img">
          <img :src="item.img" alt="">
        </div>
        <div class="goods-info">
          <div class="goods-desc">
            <p v-text="item.title"></p>
            <p v-text="item.desc" class="summary"></p>
          </div>
          <div class="goods-price">
            <p class="price">
              <em>¥ </em>
              <span v-text="item.price"></span>
            </p>
            <quantity class="quantity"></quantity>
          </div>
        </div>
      </div>
    </div>
    <div class="cart-footer">
      <i class="icon-select" :class="{'selected':allSelected}" @click="selectAll">全选</i>
      <div class="total" v-show="!isEdit">
        <strong>
          <span class="title">合计</span>
          <em>¥ </em>
          <span v-text="totalPrice"></span>
        </strong>
        <p>不含运费</p>
      </div>
      <a class="settle" v-show="!isEdit" @click="settle">结算</a>
      <a class="delete" v-show="isEdit">删除</a>
    </div>
    <cart-address v-model="addressShow"></cart-address>
  </div>
</template>
<script>
import CartHeader from './header'
import Quantity from '@/components/widget/quantity'
import CartAddress from './address'
export default {
  name: 'cart',
  components: {
    CartHeader,
    Quantity,
    CartAddress
  },
  data() {
    return {
      list: [{
        img: '//img10.360buyimg.com/n4/jfs/t6043/305/5636125253/87985/21230f90/596f169aN1246fe10.jpg',
        title: '手机',
        desc: '颜色 黑色 16Gb',
        price: 2000,
        quantity: 1,
        selected: true
      }, {
        img: '//img10.360buyimg.com/n4/jfs/t6043/305/5636125253/87985/21230f90/596f169aN1246fe10.jpg',
        title: '手机',
        desc: '颜色 黑色 16Gb',
        price: 2000,
        quantity: 1,
        selected: false
      }, {
        img: '//img10.360buyimg.com/n4/jfs/t6043/305/5636125253/87985/21230f90/596f169aN1246fe10.jpg',
        title: '手机',
        desc: '颜色 黑色 16Gb',
        price: 2000,
        quantity: 1,
        selected: false
      }, {
        img: '//img10.360buyimg.com/n4/jfs/t6043/305/5636125253/87985/21230f90/596f169aN1246fe10.jpg',
        title: '手机',
        desc: '颜色 黑色 16Gb',
        price: 2000,
        quantity: 1,
        selected: false
      }, {
        img: '//img10.360buyimg.com/n4/jfs/t6043/305/5636125253/87985/21230f90/596f169aN1246fe10.jpg',
        title: '手机',
        desc: '颜色 黑色 16Gb',
        price: 2000,
        quantity: 1,
        selected: false
      }, {
        img: '//img10.360buyimg.com/n4/jfs/t6043/305/5636125253/87985/21230f90/596f169aN1246fe10.jpg',
        title: '手机',
        desc: '颜色 黑色 16Gb',
        price: 2000,
        quantity: 1,
        selected: false
      }],
      isEdit: false,
      addressShow: false
    }
  },
  computed: {
    allSelected() {
      return this.list.every((item) => {
        return item.selected
      })
    },
    totalPrice() {
      var result = 0
      this.list.forEach((item) => {
        if (item.selected) {
          result += item.price * item.quantity
        }
      })
      return result
    }
  },
  methods: {
    selectAddress() {
      this.addressShow = true
    },
    edit(val) {
      this.isEdit = val
    },
    setSelected(item) {
      item.selected = !item.selected
    },
    selectAll() {
      var flag = this.allSelected
      this.list.forEach((item) => {
        item.selected = !flag
      })
    },
    settle() {
      this.$router.push('/orderconfirm')
    }
  }
}
</script>
