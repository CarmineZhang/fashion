<template>
  <div class="main cart">
    <cart-header @on-edit="edit" @on-address="selectAddress"></cart-header>
    <div class="cart-wrap">
      <div class="cart-item" v-for="(item,index) in list" :key="index">
        <div class="icon-select" :class="{'selected':item.selected}" @click="setSelected(item)"></div>
        <div class="goods-img">
          <img :src="item.icon" alt="">
        </div>
        <div class="goods-info">
          <div class="goods-desc">
            <p v-text="item.title"></p>
            <p v-attr="item.type" class="summary"></p>
          </div>
          <div class="goods-price">
            <p class="price">
              <em>¥ </em>
              <span v-text="item.price"></span>
            </p>
            <quantity :commodity="item" @on-change="changeQty"></quantity>
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
        <p>运费</p>
      </div>
      <a class="settle" v-show="!isEdit" @click="settle">结算</a>
      <a class="delete" v-show="isEdit" @click="del">删除</a>
    </div>
    <cart-address v-model="addressShow"></cart-address>
  </div>
</template>
<script>
import CartHeader from './header'
import Quantity from './quantity'
import CartAddress from './address'
import * as http from '@/services'
export default {
  name: 'cart',
  components: {
    CartHeader,
    Quantity,
    CartAddress
  },
  data() {
    return {
      list: [],
      isEdit: false,
      addressShow: false
    }
  },
  created() {
    this.getCart()
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
      return result.toFixed(2)
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
    changeQty(item, qty) {
      http.updateToCart(item.detailID, qty).then(res => {
        if (res.retcode === 0) {
          item.quantity = qty
        }
      })
    },
    selectAll() {
      var flag = this.allSelected
      this.list.forEach((item) => {
        item.selected = !flag
      })
    },
    del() {
      var list = []
      this.list.forEach(item => {
        if (item.selected) {
          list.push(item.detailID)
        }
      })
      if (list.length == 0) {
        this.$ve.alert('请选择一件商品')
        return
      }
      this.$ve.confirm('确认删除商品？', () => {
        http.delCartDetail(list).then(res => {
          if (res.retcode === 0) {
            this.getCart()
          }
        })
      })
    },
    settle() {
      var list = []
      this.list.forEach(item => {
        if (item.selected) {
          list.push(item)
        }
      })
      if (list.length == 0) {
        this.$ve.alert('请选择一件商品')
        return
      }
      this.$router.push('/orderconfirm')
    },
    getCart() {
      http.queryCart().then(res => {
        if (res.retcode === 0) {
          let list = res.respbody.dataList
          list.forEach((item) => {
            item.selected = false
          })
          this.list = list
        }
      })
    }
  }
}
</script>