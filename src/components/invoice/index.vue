<template>
  <div>
    <div class="select-form">
      <div>
        <div class="item" v-slider v-for="(item,index) in list" :key="index">
          <ul>
            <li>
              <span>发票抬头</span>
              <span v-text="item.name">北京炬力网络科技有限公司</span>
            </li>
            <li>
              <span>纳税人识别号</span>
              <span v-text="item.code">1232312132123123</span>
            </li>
            <li class="edit" @click="editInvoice(item)"></li>
          </ul>
          <p class="action">
            <span class="del" @click="delInvoice(item.id)">删除</span>
          </p>
        </div>
      </div>
      <div class="add" @click="add">
        <a></a>
      </div>
    </div>
    <add-invoice v-model="show"></add-invoice>
  </div>
</template>
<script>
import slider from '@/libs/slider'
// import * as http from '@/services'
import AddInvoice from './add'
export default {
  name: 'invoice',
  components: {
    AddInvoice
  },
  directives: {
    slider: slider
  },
  data() {
    return {
      list: [{
        name: '北京炬力网络科技有限公司',
        code: 12312312312,
        id: 1
      }],
      show: false
    }
  },
  methods: {
    add() {
      this.show = true
    },
    editAddr() {

    },
    delAddr() {
    }
  }
}
</script>
>
