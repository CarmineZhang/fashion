<template>
  <div>
    <div v-for="item in list" :key="item.couponsID">
      <p v-text="item.uniquelyNo"></p>
      <p>金额：{{item.amount}}</p>
      <p>{{item.status||status}}</p>
      <p>
        <a @click="bindCoupons(item.couponsID)" v-if="item.status===0">绑定</a>
      </p>
    </div>
    <div>
      <a @click="bindNewCoupons">绑定新卡</a>
    </div>
  </div>
</template>
<script>
import * as http from '@/services'
export default {
  name: 'coupons-list',
  data() {
    return {
      list: []
    }
  },
  filters: {
    status(val) {
      let ret = ''
      switch (val) {
        case 0:
          ret = '未生效'
          break
        case 1:
          ret = '已生效'
          break
        case 2:
          ret = '已使用'
          break
        case 3:
          ret = '已失效'
          break
      }
      return ret
    }
  },
  created() {
    this.getCoupons()
  },
  methods: {
    getCoupons() {
      http.queryCoupons().then(res => {
        if (res.retcode === 0) {
          this.list = res.respbody.dataList
        }
      })
    },
    bindNewCoupons() {
      this.$router.push('/coupons/bind')
    },
    bindCoupons(id) {
      http.bindCoupons(id).then(res => {
        if (res.retcode === 0) {
          this.$ve.alert('绑定成功', () => {
            this.getCoupons()
          })
        }
      })
    }
  }
}
</script>
<style lang="scss">
.form-wrapper {
  background-color: #fff;
  padding: 12px 20px;
}
</style>
