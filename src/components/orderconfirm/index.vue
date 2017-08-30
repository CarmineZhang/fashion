<template>
  <div>
    <keep-alive :exclude="['order-add-address']">
      <router-view>
      </router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: 'order-confirm'
}
</script>

