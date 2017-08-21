<template>
  <div class="main cart">
    <cart-header></cart-header>
    <div class="cart-wrap">
      <div class="cart-item" v-for="(item,index) in list" :key="index">
        <div class="icon-select" :class="{'selected':item.selected}" @click="setSelected(item)"></div>
        <div class="goods-img">
          <img :src="item.img" alt="">
        </div>
        <div class="goods-desc">
          <p v-text="item.title"></p>
          <p v-text="item.desc"></p>
        </div>
        <div class="goods-price">
          <p v-price="item.price"></p>
          <p v-text="item.quantity"></p>
        </div>
      </div>
    </div>
    <div class="cart-footer">
      <i class="icon-select" :class="{'selected':allSelected}" @click="selectAll">全选</i>
      <div class="total">
        <strong>合计 {{totalPrice | price}}</strong>
        <p>不含运费</p>
      </div>
      <a href="" class="settle">结算</a>
    </div>
  </div>
</template>
<script>
import CartHeader from './header'
export default {
  name: 'cart',
  components: {
    CartHeader
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
      }]
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
    setSelected(item) {
      item.selected = !item.selected
    },
    selectAll() {
      var flag = this.allSelected
      this.list.forEach((item) => {
        item.selected = !flag
      })
    }
  }
}
</script>
<style lang="scss">
.cart {
  .cart-wrap {
    padding-bottom: 50px;
    .cart-item {
      background-color: #fff;
      display: flex;
      padding: 10px 0;
      .goods-img {
        width: 80px;
        height: 80px;
        img {
          width: 100%;
        }
      }
      .goods-desc {
        flex: 1;
      }
      .goods-price {
        width: 80px;
      }
    }
  }
  .icon-select {
    width: 60px;
    position: relative;
    &:after {
      position: absolute;
      left: 15px;
      top: 50%;
      content: "\20";
      display: block;
      width: .35rem;
      height: .35rem;
      margin-top: -(0.35rem /2);
      background: url('../../assets/cart/no-select.png') no-repeat;
      background-size: 100%;
    }
  }
  .selected {
    &:after {
      background: url('../../assets/cart/selected.png') no-repeat;
      background-size: 100%;
      ;
    }
  }

  .cart-footer {
    position: fixed;
    bottom: 50px;
    left: 0;
    right: 0;
    height: 50px;
    background: hsla(0, 0%, 100%, .95);
    color: #333;
    font-size: 14px;
    display: flex;
    @include topline();
    .icon-select {
      padding-left: 40px;
      line-height: 50px;
      &:after {
        position: absolute;
        left: 15px;
        top: 50%;
        margin-top: -10px;
      }
    }
    .total {
      flex: 1;
      text-align: right;
      font-size: 12px;
      color: #666;
      strong {
        display: block;
        line-height: 25px;
      }
    }
    .settle {
      display: block;
      width: 100px;
      height: 50px;
      margin-left: 10px;
      line-height: 50px;
      font-size: 16px;
      text-align: center;
      font-weight: 700;
      background: #ffb54b;
      color: #fff;
    }
  }
}
</style>

