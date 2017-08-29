<template>
  <div class="num-wrap">
    <span class="minus" :class="{'disabled':minusDisabled}" @click="minus"></span>
    <div class="input-wrap">
      <input class="num" type="tel" :value="qty" @change="changeNum($event)">
    </div>
    <span class="plus" @click="plus" :class="{'disabled':plusDisabled}"></span>
  </div>
</template>
<script>
export default {
  name: 'input-number',
  props: {
    max: {
      type: Number,
      default: 200
    },
    quantity: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      minusDisabled: true,
      plusDisabled: false,
      qty: 1
    }
  },
  watch: {
    quantity(val) {
      this.minusDisabled = val === 1 ? true : false
      this.plusDisabled = val === 200 ? true : false
      this.qty = val
    }
  },
  methods: {
    changeNum(e) {
      var val = +e.target.value
      if (!isNaN(val)) {
        if (val <= 0) {
          val = 1
        } else if (val >= this.max) {
          val = 200
        }
        this.qty = val
        this.$emit('on-change', this.qty)
      }
    },
    minus() {
      if (this.minusDisabled) {
        return
      }
      this.qty = this.qty - 1
      this.$emit('on-change', this.qty)
    },
    plus() {
      if (this.plusDisabled) {
        return
      }
      this.qty = this.qty + 1
      this.$emit('on-change', this.qty)
    }
  }
}
</script>
<style lang="scss">
.num-wrap {
  position: relative;
  display: block;
  width: 100px;
  border-radius: 3px;
  overflow: hidden;
  .num {
    border: none;
  }
  &::after {
    content: "";
    display: block;
    border: 1px solid #ccc;
    position: absolute;
    top: 0;
    bottom: -100%;
    left: 0;
    right: -100%;
    pointer-events: none;
    transform-origin: 0 0;
    transform: scale(.5);
    border-radius: 6px;
  }
  .minus {
    position: relative;
    float: left;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: #fff;
    &:after {
      position: absolute;
      left: 50%;
      top: 50%;
      content: "\20";
      display: block;
      width: 16px;
      height: 2px;
      margin: -1px 0 0 -8px;
      background: #666;
      border-radius: 1px;
    }
  }
  .minus.disabled {
    &::after {
      background-color: #ccc;
    }
  }
  .plus {
    position: relative;
    float: right;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: #fff;
    &::before {
      position: absolute;
      left: 50%;
      top: 50%;
      content: "\20";
      display: block;
      width: 2px;
      height: 16px;
      margin: -8px 0 0 -1px;
      background: #666;
      border-radius: 1px;
    }
    &::after {
      position: absolute;
      left: 50%;
      top: 50%;
      content: "\20";
      display: block;
      width: 16px;
      height: 2px;
      margin: -1px 0 0 -8px;
      background: #666;
      border-radius: 1px;
    }
  }
  .plus.disabled {
    &::before {
      background-color: #ccc;
    }
    &::after {
      background-color: #ccc;
    }
  }
  .input-wrap {
    float: left;
    position: relative;
    .num {
      -webkit-appearance: none;
      border-radius: 0;
      width: 40px;
      height: 30px;
      line-height: normal;
      border-left: 0;
      border-right: 0;
      font-size: 12px;
      background: #fff;
      text-align: center;
    }
    &::before {
      content: "";
      width: 0;
      display: block;
      border-left: 1px solid #ccc;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      transform-origin: 0 0;
      transform: scaleX(.5);
      z-index: 1;
    }
    &::after {
      content: "";
      width: 0;
      display: block;
      border-right: 1px solid #ccc;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      transform-origin: 100% 0;
      transform: scaleX(.5);
      z-index: 1;
    }
  }
}
</style>

