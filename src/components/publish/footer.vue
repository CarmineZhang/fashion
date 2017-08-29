<template>
  <div class="goods-footer">
    <a class="goods-action goods-buy" @click="buy">交付求购款</a>
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
