<template>
  <input class="switch-ipt" type="checkbox" :checked="checked" @click="change($event)">
</template>
<script>
export default {
  name: 'switch',
  props: {
    checked: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    change(e) {
      this.$emit('on-click', e.target.checked)
    }
  }
}
</script>
<style lang="scss">
.switch-ipt {
  position: relative;
  width: 50px;
  height: 30px;
  border: 1px solid #DFDFDF;
  outline: 0;
  border-radius: 15px;
  box-sizing: content-box;
  background-color: #DFDFDF;
  -webkit-appearance: none;
  transition: background-color 0.1s, border 0.1s;
  &::before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 30px;
    border-radius: 15px;
    background-color: #FDFDFD;
    -webkit-transition: -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
    transition: -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
    transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
    transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1), -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
  }
  &::after {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background-color: #FFFFFF;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
    -webkit-transition: -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
    transition: -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
    transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
    transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35), -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
  }

  &:checked {
    border-color: #04BE02;
    background-color: #04BE02;
    &::before {
      transform: scale(0);
    }
    &::after {
      transform: translateX(20px);
    }
  }
}
</style>

