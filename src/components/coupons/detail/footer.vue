<template>
  <div class="goods-footer">
    <a class="goods-action goods-buy" @click="buy">立即购买</a>
  </div>
</template>
<script>
export default {
  name: 'goods-footer',
  methods: {
    buy() {
      this.$emit('on-buy')
    }
  }
}
</script>
