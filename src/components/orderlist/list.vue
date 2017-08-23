<template>
  <div>
    <div class="o-list-item">
      <div class="item-header">
        <div class="status">制作中</div>
      </div>
      <div class="item-body-wrapper">
        <div class="item-body">
          <img src="//img10.360buyimg.com/n2/jfs/t3094/57/1107687023/202099/ff931399/57c6b282n38d78374.jpg" alt="">
          <div class="content">
            <div class="info">
              <p class="title">固特异手工皮鞋</p>
              <p class="desc">颜色分类：A 宝石蓝</p>
            </div>
            <p>
              <span>
                <em>¥ </em>
                <span>2230.00</span>
              </span>
              <span>x1</span>
            </p>
          </div>
        </div>
      </div>
      <div class="item-footer">
        共1件商品，合计2330
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
  name: 'list'
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

