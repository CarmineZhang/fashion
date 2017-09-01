<template>
  <div class="home-col">
    <div class="col-header" :class="[headerClass]" v-text="cdata.categoryName"></div>
    <div class="col-body">
      <a class="banner">
        <img v-lazy="cdata.categoryImage" alt="">
      </a>
      <div class="body">
        <div class="body-item" v-for="item in cdata.commodityList" :key="item.commodityId">
          <div class="img-wrapper">
            <img v-lazy="item.image" alt="">
          </div>
          <p v-text="item.name" class="name"></p>
          <span v-text="item.title"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'column',
  props: {
    headerClass: String,
    cdata: {
      type: Object,
      default: {}
    }
  }
}
</script>
