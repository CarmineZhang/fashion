<template>
  <div>
    <div class="header-wrapper">
      <a class="header-back"></a>
      <div class="header-info">一键转让</div>
    </div>
    <section>
      <p>当前价格</p>
      <p>32000</p>
      <p>转让后，该笔收益2个小时内进入您的个人账户</p>
    </section>
    <div class="footer-action">
      <a class="action transfer-action" @click="transfer">立即转让</a>
    </div>
  </div>
</template>
<script>
import * as http from '@/services'
export default {
  name: 'fleamarket-transfer',
  data() {
    return {
      listId: 0
    }
  },
  created() {
    let item = this.$store.state.route.params.item
    if (item) {
      this.listId = item.listOrderId
    }
  },
  methods: {
    transfer() {
      http.fleaTransfer(this.listId).then(res => {
        if (res.retcode === 0) {
          this.$ve.toast.success('转让成功', () => {
            this.$router.push('/flea/order/list')
          })
        } else {
          this.$ve.alert(res.msg)
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.transfer-action {
  width: 100%;
}
</style>

