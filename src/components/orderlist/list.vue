<template>
  <div>
    <div class="o-list-item" v-for="item in list" :key="item.orderID">
      <div class="item-header">
        <div class="status">{{item.status|statusText}}</div>
      </div>
      <div class="item-body-wrapper">
        <div class="item-body" v-for="orderitem in item.list" :key="orderitem.detailID">
          <img :src="orderitem.img" alt="">
          <div class="content">
            <div class="info">
              <p class="title" v-text="orderitem.commodityName"></p>
              <p class="desc" v-attr="orderitem.type"></p>
            </div>
            <p>
              <span>
                <em>¥ </em>
                <span v-text="orderitem.price"></span>
              </span>
              <span>x{{orderitem.quantity}}</span>
            </p>
          </div>
        </div>
      </div>
      <div class="item-footer">
        共{{item.list.length}}件商品，合计¥ {{item.totalPrice}}(含运费¥ {{item.freight.toFixed(2)}})
      </div>
      <div class="item-op">
        <a href="" class="op">评价</a>
        <a href="" class="op">进度查询</a>
        <a href="" class="op">联系客服</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'list',
  props: {
    list: Array
  },
  filters: {
    statusText(val) {
      var ret = ''
      switch (val) {
        case 1:
          ret = '待支付'
          break;
        case 2:
          ret = '已支付'
          break;
        case 3:
          ret = '待发货'
          break;
        case 4:
          ret = '已发货'
          break;
        case 5:
          ret = '已转持仓'
          break;
        case 6:
          ret = '已失效'
          break;
        case 7:
          ret = '已取消'
          break;
        case 8:
          ret = '已收货'
          break;
        case 9:
          ret = '已评价'
          break;
        case 10:
          ret = '已寄售'
          break;
        case 11:
          ret = '已完成'
          break;
        case 12:
          ret = '换新支付成功'
          break;
      }
      return ret;
    }
  }
}
</script>
<style lang="scss">
.o-list-item {
  background-color: #fff;
  margin-top: 10px;
  margin-bottom: 10px;
  .item-header {
    overflow: hidden;
    .status {
      float: right;
      height: 30px;
      line-height: 30px;
      text-align: right;
      color: $maincolor;
    }
    .op {
      float: left;
      height: 30px;
      line-height: 30px;
      color: $subcolor;
    }
  }
  .item-body-wrapper {
    min-height: 75px;
  }
  .item-body {
    padding: 5px 0 5px 100px;
    position: relative;
    img {
      position: absolute;
      top: 50%;
      left: 50px;
      transform: translate3d(-50%, -50%, 0);
      width: 75px;
      height: 75px;
    }
    .content {
      .info {
        .title,
        .desc {
          color: $maincolor;
          white-space: nowrap;
          overflow: hidden;
        }
        .desc {
          color: $subcolor;
        }
      }
      .count {
        color: $subcolor;
      }
      .price {
        color: $pricecolor;
      }
    }
  }
  .item-footer {
    color: $subcolor;
  }
  .item-op {
    overflow: hidden;
    padding: 5px 0;
    .op {
      float: right;
      width: 30%;
      color: #fff;
      background-color: #3884ff;
      height: 25px;
      line-height: 25px;
      text-align: center;
      margin-right: 10px;
      border-radius: 2px;
    }
  }
}
</style>

