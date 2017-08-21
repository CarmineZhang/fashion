<template>
  <div class="cart-header">
    <a class="address" @click="showAddress">
      <em>北京市海淀区</em>
    </a>
    <a class="edit-btn" @click="edit" v-text="content">编辑</a>
  </div>
</template>
<script>
export default {
  name: 'cart-header',
  data() {
    return {
      isEdit: false
    }
  },
  computed: {
    content() {
      if (this.isEdit) {
        return '完成'
      }
      return '编辑'
    }
  },
  methods: {
    edit() {
      this.isEdit = !this.isEdit
      this.$emit('on-edit', this.isEdit)
    },
    showAddress() {
      this.$emit('on-address')
    }
  }
}
</script>
<style lang="scss">
.cart-header {
  overflow: hidden;
  position: relative;
  padding: 0 10px;
  height: 45px;
  margin-bottom: -1px;
  line-height: 45px;
  font-size: 14px;
  background: #f2f2f7;
  .address {
    position: relative;
    display: inline-block;
    color: #999;
    max-width: 30%;
    margin-right: 20px;
    white-space: nowrap;
    overflow: visible;
    font-size: 14px;
    em {
      max-width: 100%;
      display: inline-block;
      vertical-align: top;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &::before {
      content: "";
      display: inline-block;
      vertical-align: middle;
      width: .2rem;
      height: .3rem;
      margin-top: -2px;
      margin-right: 5px;
      background: url('../../assets/cart/pos.png') no-repeat;
      background-size: 100%;
    }
  }
  .edit-btn {
    float: right;
    color: #ffb54b;
  }
}
</style>

