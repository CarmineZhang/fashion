<template>
  <div class="category-header">
    <div class="header-back"></div>
    <search-bar class="header-search"></search-bar>
    <div class="header-other"></div>
  </div>
</template>
<script>
import SearchBar from '../widget/searchbar'
export default {
  name: 'category-header',
  components: {
    SearchBar
  }
}
</script>
<style lang="scss">
.category-header {
  background-color: #fff;
  display: flex;
  position: relative;
  @include bottomline();
  .header-back {
    width: 40px;
    position: relative;
    @include arrow-left();
  }
  .header-search {
    flex: 1;
  }
  .header-other {
    width: 40px;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      right: 10px;
      top: 22px;
      display: block;
      width: 15px;
      height: 3px;
      background-image: url('//wq.360buyimg.com/fd/base/img/detail/sprite_detail_sku_v1.png?20160512');
      background-repeat: no-repeat;
      background-size: 15px;
      background-position: 0 0;
    }
  }
}
</style>

