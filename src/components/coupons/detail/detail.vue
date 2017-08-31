<template>
  <div style="width:100%">
    <iframe :src="detailSrc" frameborder="0" width="100%" :height="height"></iframe>
  </div>
</template>
<script>
export default {
  name: 'detail',
  data() {
    return {
      detailSrc: 'http://www.3-sheng.com/resources/html/article200.html',
      height: 0
    }
  },
  mounted() {
    this.height = document.documentElement.clientHeight - 90
  }
}
</script>

