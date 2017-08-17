<template>
  <div>
    <transition name="ve-mask">
      <div class="mask" v-show="show" @click="cancel"></div>
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
            <input type="text" class="ipt">
          </div>
        </div>
        <div class="cell-form-item">
          <div class="cell-hd">纳税人识别号：</div>
          <div class="cell-bd">
            <input type="tel" name="" id="" class="ipt">
          </div>
        </div>
      </div>
      <div class="invoice-footer">
        <a href="" class="btn btn-primary">确认</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'add-invoice',
  props: {
    value: Boolean
  },
  data() {
    return {
      show: false
    }
  },
  watch: {
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


