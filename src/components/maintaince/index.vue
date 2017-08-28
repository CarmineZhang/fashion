<template>
  <div>
    <section class="order-address" @click="selectAddress">
      <p>
        <span>收货人：</span>
        <strong v-text="defaultAddr.realName"></strong>
      </p>
      <p class="sub-addr">
        <span>收货地址：</span>
        <span v-text="defaultAddr.addressDetail"></span>
      </p>
    </section>
    <cell type="select" title="快递"></cell>
    <cell-input title="快递单号">
      <input type="text" class="ipt" v-model="expressNo">
    </cell-input>
    <cell-input title="重量">
      <input type="text" class="ipt" v-model="weight">
    </cell-input>
    <div class="div footer-action">
      <div class="footer-desc">提交后请等待人工审核</div>
      <a  class="action" @click="submit">提交订单</a>
    </div>
  </div>
</template>
<script>
import CellInput from '@/components/widget/cell/cellinput'
import Cell from '@/components/widget/cell'
import { mapGetters } from 'vuex'
import * as http from '@/services'
export default {
  name: 'maintaince',
  components: {
    CellInput,
    Cell
  },
  data(){
    return {
      expressNo:'',
      weight:0,
      expressName:''
    }
  },
  computed: {
    ...mapGetters([
      'defaultAddr'
    ])
  },
  methods: {
    selectAddress() {
      this.$router.push({ name: 'order-select-addr' })
    },
    submit(){
      http.afterSaleMaintain().then(res=>{
        if(res.retcode===0){
          this.$ve.toast.success('提交成功')
        }
      })
    }
  }
}
</script>


