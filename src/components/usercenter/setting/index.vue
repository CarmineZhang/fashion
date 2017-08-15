<template>
  <div>
    <div class="section">
      <div class="cell cell-access">
        <div class="cell-bd">个人信息</div>
        <div class="cell-ft"></div>
      </div>
      <div class="cell cell-access">
        <div class="cell-bd">账户安全</div>
        <div class="cell-ft"></div>
      </div>
      <div class="cell cell-access">
        <div class="cell-bd">消息提醒设置</div>
        <div class="cell-ft"></div>
      </div>
      <div class="cell cell-access">
        <div class="cell-bd">通用</div>
        <div class="cell-ft"></div>
      </div>
    </div>
    <div class="section">
      <div class="cell cell-access">
        <div class="cell-bd">图片质量</div>
        <div class="cell-ft"></div>
      </div>
    </div>
    <div class="section">
      <div class="cell cell-access">
        <div class="cell-bd">关于我们</div>
        <div class="cell-ft"></div>
      </div>
      <div class="cell cell-access">
        <div class="cell-bd">意见反馈</div>
        <div class="cell-ft"></div>
      </div>
    </div>
    <a class="section-footer">
      退出登录
    </a>
  </div>
</template>
<script>
export default {
  name: 'setting'
}
</script>
<style lang="scss" scoped>
.section {
  margin-bottom: 10px;
  background-color: #fff;
}

.section-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #fff;
  color: #333;
}
</style>


