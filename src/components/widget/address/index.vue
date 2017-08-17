<template>
  <div class="ve-address">
    <transition name="ve-mask">
      <div class="mask mask-transparent" v-show="show"></div>
    </transition>
    <div class="mod-slide-main" :class="{'mod-slide-toggle': show}">
      <div class="mod-slide-header">
        所在地区
        <i class="close" @click="close"></i>
      </div>
      <div class="mod-slide-body">
        <ul class="mod-slide-tabs">
          <li :class="{'cur':level===index}" :data-level="index" v-for="(item,index) in header" :key="index" @click="changeArea">
            <span v-text="item.label"></span>
          </li>
        </ul>
        <ul class="mod-slide-list">
          <li :class="{'cur':key==selectKey}" :data-level="level" :data-key="key" v-for="(value, key) in data" :key="key" v-addr-text="value" @click="change"></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { getArea, areaList } from './util'
const province = {
  1: '北京市',
  2: '上海市',
  3: '天津市',
  4: '重庆市',
  5: '河北省',
  6: '山西省',
  7: '河南省',
  8: '辽宁省',
  9: '吉林省',
  10: '黑龙江省',
  11: '内蒙古',
  12: '江苏省',
  13: '山东省',
  14: '安徽省',
  15: '浙江省',
  16: '福建省',
  17: '湖北省',
  18: '湖南省',
  19: '广东省',
  20: '广西自治区',
  21: '江西省',
  22: '四川省',
  23: '海南省',
  24: '贵州省',
  25: '云南省',
  26: '西藏自治区',
  27: '陕西省',
  28: '甘肃省',
  29: '青海省',
  30: '宁夏省',
  31: '新疆自治区',
  32: '台湾'
}
export default {
  name: 've-address',
  data() {
    return {
      show: false,
      data: province,
      province: 0, //省
      city: 0,//市
      county: 0,//县
      town: 0, //镇
      level: 0,
      result: [],
      header: [{
        label: '请选择',
        key: -1
      }],
      selectKey: 0
    }
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
      if (val) {
        this.data = province
        this.province = 0
        this.city = 0
        this.county = 0
        this.town = 0
        this.level = 0
        this.result.splice(0)
        this.header.splice(0, this.header.length, {
          label: '请选择',
          key: -1
        })
        this.selectKey = 0
      }
    },
    level(val) {
      var temp = this.result[val]
      if (temp) {
        this.selectKey = temp.key
      } else {
        this.selectKey = 0
      }
    }
  },
  methods: {
    close() {
      this.show = false
    },
    setResult(level, ob) {
      var len = this.result.length
      this.result.splice(level, len, ob)
    },
    setHeader(level, ob) {
      this.header.splice(level)
      this.header.push(ob, {
        label: '请选择',
        key: -1
      })
    },
    changeArea(e) {
      var target = e.currentTarget
      var ds = target.dataset
      var level = +ds.level
      if (level === this.level) {
        return
      } else if (level === 0) {
        this.data = province
      } else if (level === 1) {
        this.data = areaList[this.province]
      } else if (level === 2) {
        this.data = this.data[this.city][1]
      } else if (level === 3) {
        this.data = this.data[this.county]
      }
      this.level = level
    },
    change(e) {
      var target = e.target
      var ds = target.dataset
      var level = +ds.level
      this.setResult(level, {
        key: +ds.key,
        value: target.textContent
      })
      this.setHeader(level, {
        label: target.textContent,
        key: +ds.key
      })
      if (level === 0) {
        this.province = +ds.key
        if (areaList[this.province]) {
          this.level = level + 1
          this.data = areaList[this.province]
        } else {
          getArea(this.province).then(() => {
            this.level = level + 1
            this.data = areaList[this.province]
          })
        }
      } else if (level === 1) {
        this.city = +ds.key
        this.level = level + 1
        this.data = this.data[this.city][1]
      } else if (level === 2) {
        this.county = +ds.key
        this.level = level + 1
        var list = this.data[this.county]
        if (Array.isArray(list)) {
          this.data = list[1]
        } else {
          this.show = false
          this.$emit('on-change', this.result)
        }
      } else {
        this.show = false
        this.$emit('on-change', this.result)
      }
    }
  },
  directives: {
    addrText: {
      inserted: function (el, binding) {
        var v = binding.value,
          result = v
        if (Array.isArray(v)) {
          result = v[0]
        }
        el.innerHTML = result
      }
    }
  }
}
</script>
