<template>
  <div class="list">
    <a href="" class="list-item" v-for="(item,index) in list" :key="index">
      <div class="pt-img">
        <img :src="item.img" alt="">
      </div>
      <p class="pt-des" v-text="item.desc"></p>
      <p class="pt-price">
        <strong v-price="item.price"></strong>
        <span>月销{{item.quantity}}笔</span>
      </p>
    </a>
  </div>
</template>
<script>
export default {
  name: 'product-list',
  props: {
    list: Array
  }
}
</script>
<style lang="scss">
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow: hidden;
  margin: 0 10px;
  .list-item {
    flex: 0 0 3.4rem;
    display: block;
    background-color: #fff;
    margin-bottom: 10px;
    text-align: center;
    overflow: hidden;
    box-sizing: border-box;
    border-radius: 5px;
    .pt-img {
      position: relative;
      padding-top: 122.38806%;
      height: 0;
      img {
        border-radius: 5px;
        width: 100%;
        height: auto;
        position: absolute;
        left: 0;
        top: 0;
      }
    }
    .pt-des {
      font-size: 12px;
      margin-top: 5px;
      padding: 0 5px;
      @include ellipsisLn();
    }
    .pt-price {
      font-size: 12px;
      padding: 0 5px;
      display: flex;
      strong {
        flex: 1;
        text-align: left;
      }
      span {
        flex: 1;
        text-align: right
      }
    }
  }
}
</style>

