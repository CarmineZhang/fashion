<template>
  <ul>
    <li class="cmt-item" v-for="(item,index) in list" :key="index">
      <div class="cmt-item-user" v-text="item.username"></div>
      <div class="cmt-item-cnt" v-text="item.content"></div>
      <div class="cmt-item-imglist">
        <span class="img" v-for="(imgItem ,imgIndex) in item.imgList" :key="imgIndex">
          <img :src="imgItem.img" alt="">
        </span>
      </div>
      <div class="cmt-item-type" v-text="item.type"></div>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'comment',
  data() {
    return {
      list: [{
        username: 'zzz123',
        content: '第一次认真写评论给大家做个参考！',
        imgList: [{
          img: '//img30.360buyimg.com/shaidan/s128x96_jfs/t6124/160/4970085163/50246/451bcbd5/5968d0b0Nefe74139.jpg'
        }, {
          img: '//img30.360buyimg.com/shaidan/s128x96_jfs/t6124/160/4970085163/50246/451bcbd5/5968d0b0Nefe74139.jpg'
        }, {
          img: '//img30.360buyimg.com/shaidan/s128x96_jfs/t6124/160/4970085163/50246/451bcbd5/5968d0b0Nefe74139.jpg'
        }, {
          img: '//img30.360buyimg.com/shaidan/s128x96_jfs/t6124/160/4970085163/50246/451bcbd5/5968d0b0Nefe74139.jpg'
        }, {
          img: '//img30.360buyimg.com/shaidan/s128x96_jfs/t6124/160/4970085163/50246/451bcbd5/5968d0b0Nefe74139.jpg'
        }, {
          img: '//img30.360buyimg.com/shaidan/s128x96_jfs/t6124/160/4970085163/50246/451bcbd5/5968d0b0Nefe74139.jpg'
        }],
        type: 'iphone7 64G'
      }]
    }
  }
}
</script>
<style lang="scss">
.cmt-item {
  font-size: 12px;
  color: #333;
  .cmt-item-user {
    color: #999;
  }
  .cmt-item-cnt {
    padding: 5px 0;
  }
  .cmt-item-imglist {
    .img {
      width: 70px;
      height: 70px;
      display: inline-block;
      margin-right: 3px;
      overflow: hidden;
      text-align: center;
      background: #f3f3f3;
      margin-bottom: 1px;
      img {
        width: 100%;
      }
    }
  }
  .cmt-item-type {
    color: #999;
  }
}
</style>


