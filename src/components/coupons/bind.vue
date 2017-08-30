<template>
  <div>
    <div>
      <div class="form-wrapper">
        <div class="form-item">
          <input type="tel" class="item-bd ipt" v-model="card" placeholder="请输入卡密">
        </div>
        <div class="form-op">
          <a class="btn btn-primary" @click="bindNewCoupons">
            绑定
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as http from '@/services'
export default {
  name: 'coupons-bind',
  data() {
    return {
      card: ''
    }
  },
  methods: {
    bindNewCoupons() {
      http.bindNewCoupons(this.card).then(res => {
        if (res.retcode === 0) {
          this.$ve.alert('绑定成功', () => {
            this.$router.go(-1)
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
