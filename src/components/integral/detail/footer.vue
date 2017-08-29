<template>
  <div class="goods-footer">
    <div class="goods-action goods-exchange" @click="order">立即兑换</div>
  </div>
</template>
<script>
export default {
  name: 'integral-goods-footer',
  methods: {
    order() {
      this.$router.push('/integral/order')
    }
  }
}
</script>

