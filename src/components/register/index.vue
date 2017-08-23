<template>
  <div>
    <div class="reg-form">
      <div class="reg-wrapper">
        <div class="form-item">
          <input type="tel" class="item-bd ipt" v-model="phone" placeholder="手机号码">
        </div>
        <div class="form-item">
          <input type="tel" class="item-bd ipt" v-model="code" placeholder="验证码">
          <count-down :time="60" v-model="start" :disabled="disabled" @on-click="startCountDown"></count-down>
        </div>
        <div class="form-item">
          <input type="text" class="item-bd ipt" v-model="pwd" placeholder="请输入密码">
        </div>
        <div class="form-op">
          <a class="btn btn-primary" @click="register">
            注册
          </a>
        </div>
        <div class="reg-comment">
          <a @click="login">已有账号</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CountDown from '../widget/countdown'
export default {
  name: 'register',
  components: {
    CountDown
  },
  validator: {
    phone: {
      test: 'mobile'
    }
  },
  data() {
    return {
      phone: '',
      code: '',
      pwd: '',
      start: true
    }
  },
  computed: {
    disabled() {
      return typeof this.$validator.$errors.phone !== 'undefined'
    }
  },
  methods: {
    register() {

    },
    login() {

    },
    startCountDown() {

    }
  }
}
</script>
<style lang="scss">
.reg-form {
  background-color: #fff;
  padding: .5rem 0 0;
  .reg-wrapper {
    width: 6.9rem;
    margin: 0 auto;
  }
}

.reg-op-wrapper {
  overflow: hidden;
  margin-top: .6rem;
}

.reg-comment {
  padding: .4rem 0;
  text-align: center;
  font-size: .28rem;
  color: #999;
  a {
    color: #999;
  }
}
</style>
