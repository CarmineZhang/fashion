<template>
  <div>
    <div class="header-wrapper">
      <a class="header-back" @click="back"></a>
      <div class="header-info">申请微信提现</div>
    </div>
    <div>
        <div>
          <span>当前余额</span>
          <span>999.00</span>
        </div>
        <div>
          <span>微信账号</span>
          <span>super</span>
        </div>
        <div>
          <p>微信姓名</p>
          <p><input type="text"></p>
        </div>
        <div>
          <p>提现金额</p>
          <p><input type="text"></p>
        </div>
        <div>
          <a href="">提交</a>
        </div>
    </div>
    <div>
      <p>1、提现金额需≥1元，每笔不超过2万元</p>
      <p>2、提现审核再1-3个工作日完成</p>
      <p>3、提现的微信账号确保已实名制认证。如未实名认证，请打开微信钱包-右上角-支付管理进行实名认证。</p>
    </div>
  </div>
</template>
<script>
export default {
  name:'withdraw-to-weixin',
  methods:{
    back(){
      this.go(-1)
    }
  }
}
</script>
