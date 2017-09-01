<template>
  <div class="detail-popup">
    <transition name="ve-mask">
      <div class="mod-slide" v-show="show"></div>
    </transition>
    <transition name="popup">
      <div class="popup-main" v-show="show">
        <div class="header">
          <img :src="goods.icon" class="avt">
          <p class="price">
            ¥
            <em v-text="priceStr"></em>
          </p>
          <p class="desc">
            <span>已选</span>
          </p>
          <i class="close" @click="close"></i>
        </div>
        <div class="body">
          <div class="popup-sku" v-for="item in goods.propertyList" :key="item.propertyID">
            <p class="sku-kind">{{item.propertyName}}</p>
            <div class="sku-choose">
              <span class="item" :class="{'cur':pitem.comProID===attrResult[item.propertyID]}" v-text="pitem.selector" v-for="pitem in item.propertyList" :key="pitem.propertyID" @click="selectAttr(item.propertyID,pitem.comProID)"></span>
            </div>
          </div>
          <div class="count-sku">
            <p class="count">数量</p>
            <quantity @on-change="changeQty" :quantity="qty" class="count-wrap"></quantity>
          </div>
        </div>
        <div class="footer">
          <a class="action" @click="confirm">确定</a>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import Quantity from '@/components/widget/quantity'
export default {
  name: 'popup',
  components: {
    Quantity
  },
  props: {
    goods: Object,
    value: Boolean,
    qty: Number,
    attrResult: {}
  },
  data() {
    return {
      show: false
    }
  },
  computed: {
    priceStr() {
      if (this.goods && this.goods.price) {
        return this.goods.price.toFixed(2)
      }
      return ''
    }
  },
  watch: {
    value(val) {
      this.show = val
    }
  },
  methods: {
    close() {
      this.show = false
      this.$emit('input', false)
    },
    confirm() {
      this.show = false
      this.$emit('input', false)
    },
    selectAttr(pid, aid) {
      this.$emit('on-attr-change', pid, aid)
    },
    changeQty(val) {
      this.$emit('on-qty-change', val)
    }
  }
}
</script>
