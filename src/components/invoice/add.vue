<template>
  <div>
    <transition name="ve-mask">
      <div class="mod-slide" v-show="show" @click="close"></div>
    </transition>
    <div class="mod-slide-main" :class="{'mod-slide-toggle': show}">
      <div class="mod-slide-header">
        发票抬头
        <i class="close" @click="close"></i>
      </div>
      <div class="add-form invoice-form">
        <p>
          <label>
            <span class="tit">发票抬头</span>
            <input type="text" placeholder="请填写发票抬头" v-model.trim="header" class="ipt" />
          </label>
        </p>
        <p>
          <label>
            <span class="tit">纳税人识别号</span>
            <input type="tel" placeholder="请填写纳税人识别号" v-model.trim="no" class="ipt">
          </label>
        </p>
      </div>
      <div class="invoice-footer">
        <a class="btn btn-primary" @click="submit">确认</a>
      </div>
    </div>
  </div>
</template>
<script>
import * as http from '@/services'
export default {
  name: 'add-invoice',
  props: {
    value: Boolean,
    invoice: Object
  },
  validator: {
    header: {
      test: 'required',
      message: '请输入发票抬头'
    },
    no: {
      test: 'required',
      message: '请输入纳税人识别号'
    }
  },
  data() {
    return {
      show: false,
      header: '',
      no: '',
      id: 0
    }
  },
  watch: {
    invoice(ob) {
      if (ob) {
        this.header = ob.header
        this.no = ob.dutyNo
        this.id = ob.infoId
      }
    },
    value(val) {
      this.show = val
    },
    show(val) {
      this.$emit('input', val)
    }
  },
  methods: {
    close() {
      this.show = false
    },
    submit() {
      if (this.$validator.valid) {
        if (this.id === 0) {
          http.addInvoiceInfo(this.header, this.no).then(res => {
            if (res.retcode === 0) {
              this.$ve.alert('添加成功', () => {
                this.close()
                this.$emit('on-confirm')
              })
            }
          })
        } else {
          http.updateInvoiceInfo(this.id, this.header, this.no).then(res => {
            if (res.retcode === 0) {
              this.$ve.toast.success('修改成功', () => {
                this.close()
                this.$emit('on-confirm')
              })
            }
          })
        }
      } else {
        let errors = this.$validator.$errors
        this.$ve.alert(errors.header || errors.no)
      }
    }
  }
}
</script>
<style lang="scss">
.invoice-form {
  p {
    padding-left: 120px;
    .tit {
      width: 100px;
    }
  }
}

.invoice-footer {
  margin-top: 30px;
  padding: 0 15px;
}
</style>


