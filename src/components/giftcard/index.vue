<template>
  <div>
    <div @click="showDetail">
      <p>礼品卡</p>
      <p>金额：5000</p>
      <p>有效期为2017-8-26至2017-9-28</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'gift-list',
  methods: {
    showDetail() {
      this.$router.push('/gift/carddetail')
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
