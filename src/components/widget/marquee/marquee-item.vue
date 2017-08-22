<template>
  <li>
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'marquee-item',
  mounted() {
    this.$parent.startMarquee()
  }
}
</script>