<template>
  <div>
    <div class="select-form" :class="{'selected-form':choose}">
      <div>
        <div class="item" v-slider v-for="(item,index) in list" :key="item.id">
          <ul :class="{'selected':item.isDefault===1}" @click="chooseAddr(item.addrID)">
            <li v-text="item.addressDetail"></li>
            <li>
              <strong v-text="item.realName"></strong>
              <span v-text="item.mobile"></span>
            </li>
            <li class="edit" @click.stop="editAddr(item)"></li>
          </ul>
          <p class="action">
            <span class="del" @click="delAddr(item)">删除</span>
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
import { mapActions } from 'vuex'
export default {
  name: 'address',
  directives: {
    slider: slider
  },
  props: {
    choose: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    add() {
      this.$emit('on-add')
    },
    editAddr(item) {
      this.$emit('on-edit', item)
    },
    delAddr(item) {
      if (item.isDefault === 1) {
        this.$ve.alert('默认地址不能删除')
        return
      }
      this.$ve.confirm('确定删除此地址吗?', () => {
        this.$store.dispatch('deleteAddr', { id: item.addrID }).then(res => {
          if (res.retcode === 0) {
            this.$ve.alert('删除成功', () => {
              this.getAddrList()
            })
          }
        })
      })
    },
    chooseAddr(id) {
      if (this.choose) {
        this.$store.dispatch('setDefaultAddr', { id: id }).then(res => {
          if (res.retcode === 0) {
            this.$emit('on-change')
          }
        })
      }
    },
    ...mapActions(['getAddrList'])
  }
}
</script>
