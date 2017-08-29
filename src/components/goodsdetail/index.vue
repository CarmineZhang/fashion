<template>
  <div>
    <goods-header class="fixed-header" @on-click="showView"></goods-header>
    <transition name="ve-pop-in">
      <keep-alive>
        <!-- <router-view class="goods-body"></router-view> -->
        <component :is="currentView" class="goods-body" @on-attr-change="attrChange" @on-qty-change="qtyChange"></component>
      </keep-alive>
    </transition>
    <goods-footer class="fixed-footer" @on-add-cart="addCart" @on-buy="buy"></goods-footer>
  </div>
</template>
<script>
import GoodsHeader from './header'
import GoodsFooter from './footer'
import Goods from './goods'
import Detail from './detail'
import Comments from './comments'
import * as http from '@/services'
export default {
  name: 'goods-detail',
  components: {
    GoodsHeader,
    GoodsFooter,
    Goods,
    Detail,
    Comments
  },
  computed: {
    goods() {
      return this.$store.state.goods.goods
    }
  },
  data() {
    return {
      currentView: 'goods',
      attrResult: {},
      attrlist: [],
      qty: 1
    }
  },
  methods: {
    showView(name) {
      this.currentView = name
    },
    attrChange(pid, aid) {
      this.$set(this.attrResult, pid, aid)
    },
    qtyChange(qty) {
      this.qty = qty
    },
    judgeAttr() {
      this.attrlist.splice(0, this.attrlist.length)
      let keys = Object.keys(this.attrResult)
      if (keys.length === this.goods.propertyList.length) {
        keys.forEach(key => {
          this.attrlist.push({ comProID: this.attrResult[key] })
        })
        return true
      } else {
        let list = this.goods.propertyList
        for (let i = 0, len = list.length; i < len; i++) {
          if (keys.indexOf(list[i].propertyID) === -1) {
            this.$ve.alert('请选择' + list[i].propertyName)
            break;
          }
        }
        return false
      }
    },
    addCart() {
      if (this.judgeAttr()) {
        console.log(this.attrlist)
        var loading = this.$ve.loading('处理中...')
        http.addToCart(this.goods.commodityId, this.qty, this.attrlist).then(res => {
          loading.hide()
          if (res.retcode === 0) {
            this.$ve.toast.text('添加到购物车')
          } else {
            this.$ve.alert(res.msg)
          }
        })
      }
    },
    buy() {
      if (this.judgeAttr()) {
        console.log('1')
      }
    }
  }
}
</script>
<style lang="scss">
.goods-body {
  padding: 40px 0 50px;
}
</style>
