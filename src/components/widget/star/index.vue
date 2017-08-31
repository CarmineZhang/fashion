<template>
  <div class="stars">
    <i v-for="n in num" :key="n" @click="setSelected(n)" :class="{'cur':n<=index}"></i>
  </div>
</template>
<script>
export default {
  name: 'star',
  props: {
    num: {
      type: Number,
      default: 5
    }
  },
  data() {
    return {
      index: -1
    }
  },
  methods: {
    setSelected(n) {
      this.index = n;
      this.$emit('on-change', this.index)
    }
  }
}
</script>
<style lang="scss">
.stars {
  display: inline-block;
  i {
    position: relative;
    display: block;
    float: left;
    width: 20px;
    height: 20px;
    &::after {
      content: '\20';
      display: block;
      width: 20px;
      height: 20px;
      background: url(https://wq.360buyimg.com/fd/base/img/my/comment_v2.png?t=20160114) no-repeat 0 0;
      background-size: 80px 40px;
      background-position: 0 -20px;
    }
  }
  i.cur {
    &::after {
      background-position: -20px -20px;
    }
  }
}
</style>

