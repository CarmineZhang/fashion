<template>
  <div class="search-wrapper">
    <div class="search-qrcode"></div>
    <search-bar></search-bar>
    <div class="search-message"></div>
  </div>
</template>
<script>
import SearchBar from '@/components/widget/searchbar'
export default {
  name: 'header',
  components: {
    SearchBar
  }
}
</script>
<style lang="scss">
.search-qrcode {
  width: 40px;
  height: 46px;
  background: #fdb34b url('../../assets/index/qrocde.png') no-repeat;
  background-position: 50%;
  background-size: (39px/2) (38px/2);
}

.search-message {
  width: 40px;
  height: 46px;
  background: #fd9520 url('../../assets/index/message.png') no-repeat;
  background-position: 50%;
  background-size: (43px/2) (41px/2);
}
</style>

