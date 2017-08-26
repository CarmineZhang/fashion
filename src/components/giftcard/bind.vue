<template>
  <div>
    <div>
      <div class="form-wrapper">
        <div class="form-item">
          <input type="tel" class="item-bd ipt" v-model="card" placeholder="请输入卡密">
        </div>
        <div class="form-item">
          <input type="text" class="item-bd ipt" placeholder="请输入验证码">
          <img src="" alt="">
        </div>
        <div class="form-op">
          <a class="btn btn-primary">
            绑定
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'gift',
  data() {
    return {
      card: ''
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
