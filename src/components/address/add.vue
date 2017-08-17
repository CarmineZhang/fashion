<template>
  <div>
    <div class="addr-form">
      <p>
        <label>
          <span class="tit">收货人</span>
          <input type="text" placeholder="姓名">
        </label>
      </p>
      <p>
        <label>
          <span class="tit">联系方式</span>
          <input type="tel" maxlength="11" placeholder="手机号码">
        </label>
      </p>
      <p id="selAddr" @click="showArea">
        <label>
          <span class="tit">省市区县</span>
          <input type="text" readonly="" placeholder="选择省市区县" id="provincecity">
          <i class="arrow"></i>
        </label>
      </p>
      <p>
        <label>
          <span class="tit">详细地址</span>
          <textarea placeholder="街道地址" rows="2" id="adinfo"></textarea>
          <i class="close" id="closeDetail"></i>
        </label>
      </p>
    </div>
    <div class="btn-wrap">
      <a class="btn btn-primary" id="btnOk">确认</a>
      <a class="btn btn-default">删除收货地址</a>
    </div>
    <my-area v-model="show" @on-change="setArea"></my-area>
  </div>
</template>
<script>
import Cell from '../widget/cell'
import MyArea from '../widget/address'
export default {
  name: 'add-address',
  components: {
    Cell,
    MyArea
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    showArea() {
      this.show = true
    },
    setArea(result) {
      console.log(result)
    }
  }
}
</script>
<style lang="scss">
.addr-form {
  background: #fff;
  position: relative;
  padding-bottom: 10px;

  p {
    padding: 12px 10px 12px 75px;
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    @include bottomline();
  }

  label {
    display: block;
    font-size: 14px;
    color: #333;
  }

  .tit {
    width: 65px;
    line-height: 1;
    position: absolute;
    top: 15px;
    left: 0;
    right: 0;
    margin: auto 0;
    text-align: right;
  }

  input {
    height: 20px;
    line-height: normal;
    border: 0 none;
    width: 100%;
    -webkit-appearance: none;
    vertical-align: top;
    font-size: 14px;
    color: #333;
  }

  textarea {
    -webkit-appearance: none;
    width: 100%;
    border: none;
    resize: none;
    font-size: 14px;
    line-height: 1.5;
  }

  .street_detail {
    padding-right: 35px;
  }

  .arrow {
    position: absolute;
    right: 0;
    top: 0;
    width: 35px;
    height: 44px;
    @include arrow-right();
    &:after {
      right: 20px;
    }
  }

  .close {
    position: absolute;
    right: 0;
    top: 0;
    width: 35px;
    height: 44px;
    &::after {
      content: "";
      position: absolute;
      top: 16px;
      right: 10px;
      width: 15px;
      height: 15px;
      background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeBAMAAADJHrORAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN0S+bUAAAANdFJOU00ARgwYLAUnEg40OzwIOFrEAAAAvklEQVQY02MQBAHXQww6IWAWAxCLFTGAgHoilO/EAAEqEL4oAwwEgvkL4HwuEB8hDVLAIOiAxGcRZBBTQOIzJTKIMyCDQgYhkLImIKEB0qjIACI5hBUYmAwbQDIMASBthkYMypIgg1gZNoC0KQsrGU4CMbgZwMYzGRpLQhhQc5UFJ6HYoyxoBGVB1U8WhqqHmCepZGgEMQ9i3ySgFRD7wO6RRLgH3b3o/kH3L3p4YIQXenhihDd6fGDEF3J8AgDkYx3BeW71dAAAAABJRU5ErkJggg==");
      background-size: 15px;
    }
  }
}
</style>

