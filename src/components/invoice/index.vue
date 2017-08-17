<template>
  <div>
    <div class="select-form">
      <div>
        <div class="address" v-slider v-for="(item,index) in list" :key="index">
          <ul>
            <li>
              <span>发票抬头</span>
              <span>北京炬力网络科技有限公司</span>
            </li>
            <li>
              <strong>纳税人识别号</strong>
              <span>1232312132123123</span>
            </li>
            <li class="edit" @click="editInvoice(item)"></li>
          </ul>
          <p class="action">
            <span class="del" @click="delInvoice(item.AddrId)">删除</span>
          </p>
        </div>
      </div>
      <div class="address-add" @click="add">
        <a></a>
      </div>
    </div>
  </div>
</template>
<script>
import slider from '@/libs/slider'
import * as http from '@/services'
export default {
  name: 'invoice',
  directives: {
    slider: slider
  },
  data() {
    return {
      list: []
    }
  },
  methods: {
    add() {

    },
    editAddr() {

    },
    delAddr() {
    }
  }
}
</script>
>
