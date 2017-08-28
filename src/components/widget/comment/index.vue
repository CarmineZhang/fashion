<template>
  <ul>
    <li class="cmt-item" v-for="(item,index) in list" :key="index">
      <div class="cmt-item-user" v-text="item.userName"></div>
      <div class="cmt-item-cnt" v-text="item.content"></div>
      <div class="cmt-item-imglist">
        <span class="img" v-for="(imgItem ,imgIndex) in item.images.split(',')" :key="imgIndex">
          <img :src="imgItem" alt="">
        </span>
      </div>
      <div class="cmt-item-type" v-attr="item.productParameter"></div>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'comment',
  props: {
    list: Array
  },
  directives: {
    attr: {
      bind(el, binding) {
        let val = binding.value
        let ret = ''
        if (val) {
          val.forEach(item => {
            ret += item.propertyName + '  ' + item.selector + '  '
          })
        }
        el.innerHTML = ret
      }
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


