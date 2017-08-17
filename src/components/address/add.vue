<template>
  <div>
    <div class="addr-form">
      <p>
        <label>
          <span class="tit">收货人</span>
          <input type="text" placeholder="姓名" v-model="receiver" class="ipt" />
        </label>
      </p>
      <p>
        <label>
          <span class="tit">联系方式</span>
          <input type="tel" maxlength="11" placeholder="手机号码" v-model="phone" class="ipt">
        </label>
      </p>
      <p class="area" @click="showArea">
        <label>
          <span class="tit">省市区县</span>
          <input type="text" readonly="" placeholder="选择省市区县" id="provincecity" :value="area" class="ipt">
          <i class="arrow"></i>
        </label>
      </p>
      <p class="detail">
        <label>
          <span class="tit">详细地址</span>
          <textarea placeholder="街道地址" rows="2" v-model="detail" ref="textarea"></textarea>
          <i class="close" @click="clearDetail"></i>
        </label>
      </p>
    </div>
    <div class="btn-wrapper">
      <a class="btn btn-primary" @click="addAddress">确认</a>
      <a class="btn btn-default" v-show="isEdit" @click="delAddress">删除收货地址</a>
    </div>
    <my-area v-model="show" @on-change="setArea"></my-area>
  </div>
</template>
<script>
import Cell from '../widget/cell'
import MyArea from '../widget/address'
import * as http from '@/services'
export default {
  name: 'add-address',
  components: {
    Cell,
    MyArea
  },
  data() {
    return {
      isEdit: false,
      receiver: '',
      areaId: 0,
      phone: '',
      province: '',
      provinceId: 0,
      city: '',
      cityId: 0,
      town: '',
      townId: 0,
      county: '',
      countyId: 0,
      detail: '',
      show: false
    }
  },
  beforeMount() {
    var params = this.$store.state.route.params
    this.isEdit = params.edit || false
    var addr = params.addr
    if (addr) {
      this.province = addr['province'] || ''
      this.provinceId = addr['provinceId'] || 0
      this.city = addr['city'] || ''
      this.cityId = addr['cityId'] || 0
      this.town = addr['town'] || ''
      this.townId = addr['townId'] || 0
      this.county = addr['county'] || ''
      this.countyId = addr['countyId'] || 0
    }
  },
  computed: {
    area() {
      return this.province + this.city + this.town + this.county
    }
  },
  methods: {
    showArea() {
      this.show = true
    },
    getValue(ob) {
      return ob ? ob.value : ''
    },
    getKey(ob) {
      return ob ? ob.key : 0
    },
    setArea(result) {
      console.log(result)
      this.province = this.getValue(result[0])
      this.provinceId = this.getKey(result[0])
      this.city = this.getValue(result[1])
      this.cityId = this.getKey(result[1])
      this.town = this.getValue(result[2])
      this.townId = this.getKey(result[2])
      this.county = this.getValue(result[3])
      this.countyId = this.getKey(result[3])
    },
    clearDetail() {
      this.detail = ''
      this.$refs.textarea.focus()
    },
    addAddress() {
      http.editAddr(this.receiver, this.phone, this.provinceId, this.cityId, this.townId, this.countyId, this.detail, this.areaId).then(res => {
        if (res.retcode === 0) {
          this.$ve.alert('添加成功', () => {
            this.$router.push('/selectaddress')
          })
        }
      })
    },
    delAddress() {
      http.delAddr(this.areaId).then(res => {
        if (res.retcode === 0) {
          this.$ve.alert('删除成功', () => {
            this.$router.push('/selectaddress')
          })
        }
      })
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

  textarea {
    -webkit-appearance: none;
    width: 100%;
    border: none;
    resize: none;
    font-size: 14px;
    line-height: 1.5;
  }

  .detail {
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

.btn-wrapper {
  background: #fff;
  padding: 10px 15px;
}
</style>

