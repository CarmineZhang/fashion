<template>
  <div>
    <div class="section">
      <cell type="link" title="地址管理" @on-click="showAddress"></cell>
      <cell type="link" title="发票管理" @on-click="showInvoice"></cell>
      <cell type="link" title="消息提醒设置"></cell>
      <cell type="link" title="通用"></cell>
    </div>
    <div class="section">
      <cell type="link" title="图片质量"></cell>
    </div>
    <div class="section">
      <cell type="link" title="关于我们"></cell>
      <cell type="link" title="意见反馈"></cell>
    </div>
    <a class="section-footer">
      退出登录
    </a>
  </div>
</template>
<script>
import Cell from '@/components/widget/cell'
export default {
  name: 'setting',
  components: {
    Cell
  },
  methods: {
    showAddress() {
      this.$router.push({
        name: 'setting-addrlist'
      })
    },
    showInvoice() {
      this.$router.push({ name: 'setting-invoicelist' })
    }
  }
}
</script>
<style lang="scss" scoped>
.section {
  margin-bottom: 10px;
  background-color: #fff;
}

.section-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #fff;
  color: #333;
}
</style>


