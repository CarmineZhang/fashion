<template>
  <div class="left-nav">
    <ul class="category">
      <li :class="{'cur':curId===item.categoryId}" v-for="item in category" :key="item.categoryId" @click="search(item)">{{item.categoryName}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'flea-market-select',
  data() {
    return {
      curId: 0
    }
  },
  computed: {
    category() {
      return this.$store.state.category.jfcategories
    },
  },
  created() {
    this.$store.dispatch('getJFCategory').then(() => {
      if (this.category && this.category.length > 0) {
        this.curId = this.category[0].categoryId
        this.$emit('on-click', this.curId)
      }
    })
  },
  methods: {
    search(item) {
      this.curId = item.categoryId
      this.$emit('on-click', this.curId)
    }
  }
}
</script>
<style lang="scss">
.left-nav {
  overflow: hidden;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 80px;
  background-color: rgb(243, 243, 243);
  right: 0px;
  .category {
    position: relative;
    font-size: 12px;
    width: 80px;
    color: #666;
    text-align: center;
    background-color: #f0f0f5;
    li {
      position: relative;
      padding: 0 5px;
      height: 45px;
      line-height: 45px;
      @include bottomline(#e5e5e5);
    }
    li.cur {
      color: #e93b3d;
      background: #fff;
    }
  }
}

.right-goods {
  overflow: hidden;
  position: absolute;
  top: 0px;
  left: 80px;
  right: 0px;
}
</style>

