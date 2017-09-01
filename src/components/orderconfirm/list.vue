<template>
  <div>
    <div class="order-goods-header"></div>
    <div class="order-goods-body" v-for="item in list" :key="item.detailID">
      <div class="goods-img">
        <img :src="item.icon" alt="">
      </div>
      <ul class="goods-info">
        <li v-text="item.title" class="title"></li>
        <li class="type" v-attr="item.type"></li>
        <div class="goods-price">
          <span>
            ¥
            <em v-text="item.price"></em>
          </span>
          <span class="quantity">x {{item.quantity}}</span>
        </div>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'order-list',
  props: {
    list: Array
  }
}
</script>

