<template>
  <div>
    <div class="select-form">
      <div>
        <div class="item" v-slider v-for="(item,index) in list" :key="index">
          <ul>
            <li>吉林省松原市长岭县123</li>
            <li>
              <strong>测试1</strong>
              <span>136****6754</span>
            </li>
            <li class="edit" @click="editAddr(item)"></li>
          </ul>
          <p class="action">
            <span class="del" @click="delAddr(item.AddrId)">删除</span>
          </p>
        </div>
      </div>
      <div class="add" @click="add">
        <a></a>
      </div>
    </div>
  </div>
</template>
<script>
import slider from '@/libs/slider'
import * as http from '@/services'
export default {
  name: 'address',
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
      this.$router.push({ name: 'addaddress', params: { edit: false } })
    },
    editAddr(item) {
      this.$router.push({ name: 'addaddress', params: { edit: true, addr: item } })
    },
    delAddr(id) {
      http.delAddr(id).then(res => {
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
