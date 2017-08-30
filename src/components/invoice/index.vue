<template>
  <div>
    <div class="select-form" :class="{'selected-form':choose}">
      <div>
        <div class="item" v-slider v-for="item in list" :key="item.infoID">
          <ul @click="chooseInvoice(item.infoId)">
            <li>
              <span>发票抬头</span>
              <span v-text="item.header"></span>
            </li>
            <li>
              <span>纳税人识别号</span>
              <span v-text="item.dutyNo"></span>
            </li>
            <li class="edit" @click="editInvoice(item)"></li>
          </ul>
          <p class="action">
            <span class="del" @click="delInvoice(item.infoId)">删除</span>
          </p>
        </div>
      </div>
      <div class="add" @click="add">
        <a></a>
      </div>
    </div>
    <add-invoice v-model="show" :invoice="currentInvoice" @on-confirm="confirm"></add-invoice>
  </div>
</template>
<script>
import slider from '@/libs/slider'
import * as http from '@/services'
import AddInvoice from './add'
export default {
  name: 'invoice',
  components: {
    AddInvoice
  },
  directives: {
    slider: slider
  },
  props: {
    choose: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      list: [],
      show: false,
      currentInvoice: null
    }
  },
  created() {
    this.getInvoice()
  },
  methods: {
    getInvoice() {
      http.queryInvoiceInfo().then(res => {
        if (res.retcode === 0) {
          this.list = res.respbody.list
        }
      })
    },
    add() {
      this.currentInvoice = null
      this.show = true
    },
    chooseInvoice(id) {
      this.$emit('on-change', id)
    },
    editInvoice(item) {
      this.currentInvoice = {
        ...item
      }
      this.show = true
    },
    delInvoice(id) {
      http.deleteInvoiceInfo(id).then(res => {
        if (res.retcode === 0) {
          this.$ve.alert('删除成功', () => {
            this.getInvoice()
          })
        }
      })
    },
    confirm() {
      this.getInvoice();
    }
  }
}
</script>
