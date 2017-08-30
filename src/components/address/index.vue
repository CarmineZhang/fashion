<template>
  <div>
    <div class="select-form" :class="{'selected-form':choose}">
      <div>
        <div class="item" v-slider v-for="(item,index) in list" :key="item.id">
          <ul :class="{'selected':choose&&item.isDefault===1}" @click="chooseAddr(item.addrID)">
            <li v-addr-detail="item"></li>
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
    slider: slider,
    addrDetail: {
      bind(el, binding) {
        var item = binding.value
        let ret = ''
        if (item.provinceName) {
          ret += item.provinceName
        }
        if (item.cityName) {
          ret += item.cityName
        }
        if (item.districtName) {
          ret += item.districtName
        }
        if (item.townName) {
          ret += item.townName
        }
        if (item.addressDetail) {
          ret += item.addressDetail
        }
        el.innerHTML = ret
      },
      update(el, binding) {
        var item = binding.value
        let ret = ''
        if (item.provinceName) {
          ret += item.provinceName
        }
        if (item.cityName) {
          ret += item.cityName
        }
        if (item.districtName) {
          ret += item.districtName
        }
        if (item.townName) {
          ret += item.townName
        }
        if (item.addressDetail) {
          ret += item.addressDetail
        }
        el.innerHTML = ret
      }
    }
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
        this.$store.dispatch('deleteAddr', { id: item.addrID }).then(() => {
          this.$ve.alert('删除成功', () => {
            this.getAddrList()
          })
        })
      })
    },
    chooseAddr(id) {
      if (this.choose) {
        this.$store.dispatch('setDefaultAddr', { id: id }).then(() => {
          this.$emit('on-change')
        })
      }
    },
    ...mapActions(['getAddrList'])
  }
}
</script>
