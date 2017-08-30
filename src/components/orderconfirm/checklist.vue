<template>
  <div>
    <label class="cell checklist" v-for="(item,index) in list" :key="index" :for="`checkbox_${index}`">
      <div class="cell-hd">
        <input type="checkbox" name="vux-checkbox" :value="item.couponsID" v-model="currentValue" class="cell-check" :id="`checkbox_${index}`">
        <i class="icon-checked"></i>
      </div>
      <div class="cell-bd">
        <p v-text="item.amount"></p>
      </div>
    </label>
  </div>
</template>
<script>
export default {
  name: 'checklist',
  props: {
    list: Array
  },
  data() {
    return {
      currentValue: []
    }
  },
  watch: {
    currentValue(newval) {
      this.$emit('on-change', newval)
    }
  }
}
</script>
<style lang="scss">
.cell-check {
  position: absolute;
  left: -9999em;
}

.checklist {
  .cell-hd {
    position: relative;
    width: 40px;
    .icon-checked {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}

.cell-check+.icon-checked {
  display: block;
  width: .35rem;
  height: .35rem;
  background: url('../../assets/cart/no-select.png') no-repeat;
  background-size: 100%;
}

.cell-check:checked+.icon-checked {
  display: block;
  width: .35rem;
  height: .35rem;
  background: url('../../assets/cart/selected.png') no-repeat;
  background-size: 100%;
}
</style>


