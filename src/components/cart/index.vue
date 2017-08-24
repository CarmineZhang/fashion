<template>
  <div class="main cart">
    <cart-header @on-edit="edit" @on-address="selectAddress"></cart-header>
    <div class="cart-wrap">
      <div class="cart-item" v-for="(item,index) in list" :key="index">
        <div class="icon-select" :class="{'selected':item.selected}" @click="setSelected(item)"></div>
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
<style lang="scss">
.cart {
  .cart-wrap {
    padding-bottom: 50px;
    .cart-item {
      background-color: #fff;
      display: flex;
      padding: 10px 0;
      .goods-img {
        padding: 0 10px;
        img {
          width: 80px;
          height: 80px;
        }
      }
      .goods-info {
        flex: 1;
        padding-right: 10px;
        .goods-desc {
          padding-bottom: 12px;
          p {
            vertical-align: top;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .summary {
            color: #999;
          }
        }
        .goods-price {
          display: flex;
          height: 30px;
          line-height: 30px;
          padding-right: 1px;
          .price {
            flex: 1;
            font-size: 14px;
            color: #e4393c;
            em {
              font-size: 10px;
              font-style: normal;
            }
          }
          .quantity {
            flex: 1;
          }
        }
      }
    }
  }
  .icon-select {
    width: 40px;
    position: relative;
    &:after {
      @include select()
    }
  }
  .selected {
    &:after {
      @include selected()
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
    align-items: center;
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
      font-size: 14px;
      color: #666;
      strong {
        font-weight: normal;
        color: #e4393c;
        display: block;
        line-height: 25px;
        .title {
          color: #333;
        }
        em {
          font-size: 10px;
          font-style: normal;
        }
      }
      p {
        font-size: 12px;
        color: #999;
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
    .delete {
      position: absolute;
      right: 10px;
      top: 12px;
      display: inline-block;
      margin-left: 5px;
      width: 69px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      color: #fff;
      font-size: 12px;
      background: #f19325;
      border-radius: 2px;
    }
  }
}
</style>

