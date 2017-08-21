<template>
  <div class="index-search">
    <div class="search-qrcode"></div>
    <search-bar class="index-searchbar"></search-bar>
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
.index-search {
  display: flex;
  background: -webkit-gradient(linear, left bottom, right bottom, from(#fdb34b), to(#fd9520));
}

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

.index-searchbar {
  flex: 1;
  background: -webkit-gradient(linear, left bottom, right bottom, from(#fdb34b), to(#fd9520));
  .search-bar-form {
    background: -webkit-gradient(linear, left bottom, right bottom, from(#fec46f), to(#feaf4c));
    .search-bar-ipt {
      color: #fff;
    }
  }
}

input::-webkit-input-placeholder {
  color: #fff;
}
</style>

