<template>
  <div>
    <transition name="ve-mask">
      <div class="mod-slide" v-show="show" @click="cancel"></div>
    </transition>
    <div class="mod-slide-main" :class="{'mod-slide-toggle': show}">
      <div class="mod-slide-header">
        发票抬头
        <i class="close" @click="cancel"></i>
      </div>
      <div class="invoice-body">
        <div class="cell-form-item">
          <div class="cell-hd">发票抬头：</div>
          <div class="cell-bd">
            <input type="text" class="ipt" v-model="header">
          </div>
        </div>
        <div class="cell-form-item">
          <div class="cell-hd">纳税人识别号：</div>
          <div class="cell-bd">
            <input type="tel" class="ipt" v-model="no">
          </div>
        </div>
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
        this.header = ob.header,
          this.no = ob.dutyNo,
          this.id = ob.infoID
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
    cancel() {
      this.show = false
    },
    submit() {
      if (this.id) {
        http.addInvoiceInfo(this.header, this.no).then(res => {
          if (res.retcode === 0) {
            this.$ve.toast.success('添加成功', () => {
              this.cancel()
              this.$emit('on-confirm')
            })
          }
        })
      } else {
        http.updateInvoiceInfo(this.id,this.header, this.no).then(res => {
          if (res.retcode === 0) {
            this.$ve.toast.success('修改成功', () => {
              this.cancel()
              this.$emit('on-confirm')
            })
          }
        })
      }
    }
  }
}
</script>
<style lang="scss">
.invoice-footer {
  margin-top: 30px;
  padding: 0 15px;
}
</style>


