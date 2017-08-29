<template>
  <div class="ve-address">
    <transition name="ve-mask">
      <div class="mod-slide" v-show="show"></div>
    </transition>
    <div class="mod-slide-main" :class="{'mod-slide-toggle': show}">
      <div class="mod-slide-header">
        物流公司
        <i class="close" @click="close"></i>
      </div>
      <div class="mod-slide-body">
        <ul class="mod-slide-list select-attr">
          <li class="item" v-for="item in list" :key="item.infoID" v-text="item.shipperName" @click="select(item)">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import * as http from '@/services'
export default {
  name: 'integral-order-confirm',
  data() {
    return {
      show: false,
      list: []
    }
  },
  created() {
    http.queryLogisticsInfo().then(res => {
      if (res.retcode === 0) {
        this.list = res.respbody.list
      }
    })
  },
  props: {
    value: Boolean
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
    close() {
      this.show = false
    },
    select(item) {
      this.close();
      this.$emit('on-click', item)
    }
  }
}
</script>
<style lang="scss">
.select-attr {
  .item {
    position: relative;
    @include bottomline();
  }
}
</style>


