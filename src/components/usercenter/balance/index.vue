<template>
  <div>
    <p>我的余额</p>
    <p>
      <em>¥ </em>
      <span v-text="goods.price"></span>
    </p>
    <p>
      <a @click="withdrawToWx">微信提现</a>
      <a @click="widthdrawToBankCard">银行卡提现</a>
    </p>
    <div>
      <a>收支明细</a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'balance',
  methods:{
    withdrawToWx(){

    },
    widthdrawToBankCard(){

    }
  }
}
</script>
