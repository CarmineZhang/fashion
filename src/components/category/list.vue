<template>
  <div class="list">
    <a class="list-item" v-for="(item,index) in list" :key="index" @click="showGoods">
      <div class="pt-img">
        <img :src="item.img" alt="">
      </div>
      <p class="pt-des" v-text="item.desc"></p>
      <p class="pt-price">
        <strong>
          <em>¥ </em>
          <span v-price="item.price"></span>
        </strong>
        <span>月销{{item.quantity}}笔</span>
      </p>
    </a>
  </div>
</template>
<script>
export default {
  name: 'product-list',
  computed: {
    list() {
      return this.$store.state.goods.list
    }
  },
  methods: {
    showGoods() {
      this.$router.push('/goodsdetail')
    }
  }
}
</script>
<style lang="scss">
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow: hidden;
  margin-top: 10px;
  .list-item {
    flex: 0 0 3.7rem;
    display: block;
    background-color: #fff;
    margin-bottom: 10px;
    text-align: center;
    overflow: hidden;
    box-sizing: border-box;
    .pt-img {
      position: relative;
      padding-top: 100%;
      height: 0;
      img {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
      }
    }
    .pt-des {
      font-size: 12px;
      margin: 10px 0;
      padding: 0 5px;
      text-align: left;
      @include ellipsisLn();
    }
    .pt-price {
      font-size: 12px;
      padding: 0 5px;
      display: flex;
      margin: 5px 0;
      strong {
        flex: 1;
        text-align: left;
        font-weight: normal;
        color: #e4393c;
        em {
          font-size: 12px;
        }
      }
      span {
        flex: 1;
        text-align: right
      }
    }
  }
}
</style>

