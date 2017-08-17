<template>
  <div>
    <div class="address-wrap">
      <div>
        <div class="address" v-slider>
          <ul>
            <li>吉林省松原市长岭县123</li>
            <li>
              <strong>测试1</strong>
              <span>136****6754</span>
            </li>
            <li class="edit"></li>
          </ul>
          <p class="action">
            <span class="del">删除</span>
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
import slider from './slider'
export default {
  name: 'address',
  directives: {
    slider: slider
  },
  methods: {
    add() {
      this.$router.push('addaddress')
    }
  }
}
</script>
