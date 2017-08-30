<template>
  <div>
    <div class="add-form">
      <p>
        <label>
          <span class="tit">收货人</span>
          <input type="text" placeholder="姓名" v-model.trim="receiver" class="ipt" />
        </label>
      </p>
      <p>
        <label>
          <span class="tit">联系方式</span>
          <input type="tel" maxlength="11" placeholder="手机号码" v-model.trim="mobile" class="ipt">
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
          <textarea placeholder="街道地址" rows="2" v-model.trim="detail" ref="textarea"></textarea>
          <i class="close" @click="clearDetail"></i>
        </label>
      </p>
    </div>
    <div class="btn-wrapper">
      <a class="btn btn-primary" @click="addAddress">确认</a>
    </div>
    <my-area v-model="show" @on-change="setArea"></my-area>
  </div>
</template>
<script>
import Cell from '@/components/widget/cell'
import MyArea from '@/components/widget/address'
export default {
  name: 'add-address',
  components: {
    Cell,
    MyArea
  },
  validator: {
    receiver: [{
      test: 'required',
      message: '请填写收货人姓名'
    }, {
      test: (val) => {
        let temp = val.replace(/[^\x00-\xff]/g, 'aaa')
        return temp.length >= 3
      },
      message: '姓名太短，请输入正确的姓名'
    }, {
      test: (val) => {
        let temp = val.replace(/[^\x00-\xff]/g, 'aaa')
        return temp.length <= 30
      },
      message: '姓名必须少于等于10个汉字'
    }, {
      test: (val) => {
        let temp = val.replace(/[^\x00-\xff]/g, 'aaa')
        return /^[\A-Za-z·]{3,30}$/.test(temp)
      },
      message: '收货人姓名只能输入中文和字母'
    }],
    mobile: [{
      test: 'required',
      message: '请填写手机号码'
    }, 'mobile'],
    area: { test: 'required', message: '请选择省市区县信息' },
    detail: [{
      test: 'required',
      message: '请填写详细地址'
    }, {
      test: (val) => {
        let temp = val.replace(/[^\x00-\xff]/g, 'aaa')
        return temp.length <= 255
      },
      message: '详细地址太长，不能超过85个汉字'
    }]
  },
  data() {
    return {
      receiver: '',
      addrID: 0,
      mobile: '',
      province: '',
      provinceId: 0,
      city: '',
      cityId: 0,
      town: '',
      townId: 0,
      county: '',
      countyId: 0,
      detail: '',
      isDefault: 1,
      show: false
    }
  },
  beforeMount() {
    var params = this.$store.state.route.params
    var addr = params.addr
    console.dir(addr)
    if (addr) {
      this.province = addr['provinceName'] || ''
      this.provinceId = addr['provinceId'] || 0
      this.city = addr['cityName'] || ''
      this.cityId = addr['cityId'] || 0
      this.county = addr['districtName'] || ''
      this.countyId = addr['countyId'] || 0
      this.town = addr['townName'] || ''
      this.townId = addr['townId'] || 0
      this.receiver = addr.realName || ''
      this.addrID = addr.addrID
      this.mobile = addr.mobile
      this.detail = addr.addressDetail || ''
      this.isDefault = addr.isDefault
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
      this.province = this.getValue(result[0])
      this.provinceId = this.getKey(result[0])
      this.city = this.getValue(result[1])
      this.cityId = this.getKey(result[1])
      this.county = this.getValue(result[2])
      this.countyId = this.getKey(result[2])
      this.town = this.getValue(result[3])
      this.townId = this.getKey(result[3])
    },
    clearDetail() {
      this.detail = ''
      this.$refs.textarea.focus()
    },
    addAddress() {
      var addr = {
        "addrID": this.addrID,
        "province": this.provinceId,
        "city": this.cityId,
        "countyName": this.countyId,
        "townName": this.townId,
        "addressDetail": this.detail,
        "realName": this.receiver,
        "mobile": this.mobile,
        "isDefault": this.isDefault
      }
      console.log(addr)
      if (this.$validator.valid) {
        this.$store.dispatch('editAddr', addr).then(res => {
          if (res.retcode === 0) {
            this.$ve.alert('编辑成功', () => {
              this.$emit('on-confirm')
            })
          }
        })
      } else {
        let errors = this.$validator.$errors
        this.$ve.alert(errors.receiver || errors.mobile || errors.area || errors.detail)
      }
    }
  }
}
</script>
<style lang="scss">
.btn-wrapper {
  background: #fff;
  padding: 10px 15px;
}
</style>

