<template>
  <div class="flea-goods-wrapper">
    <ul class="goods">
      <li v-for="item in data" :key="item.commodityId">
        <div class="cover">
          <img :src="item.icon" alt="">
        </div>
        <p class="tit" v-text="item.name"></p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'flea-market-goods',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style lang="scss">
.flea-goods-wrapper {
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 80px;
  right: 0px;
  .goods {
    li {
      box-sizing: border-box;
      position: relative;
      float: left;
      width: 33.33%;
      padding-top: 33.3295%;
      margin: 0 2px 2px 0;
      font-size: 12px;
      text-align: center;
      background-color: #f8f8f8;
      .cover {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        img {
          width: 100%;
        }
      }
      .tit {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 12px;
        line-height: 25px;
        height: 25px;
        padding: 0 5px;
        background: #fff;
      }
    }
  }
}
</style>


