<template>
  <div class="main">
    <my-header></my-header>
    <my-order></my-order>
    <my-tool></my-tool>
  </div>
</template>
<script>
import MyHeader from './myheader'
import MyOrder from './myorder'
import MyTool from './mytool'
export default {
  name: 'usercenter',
  components: {
    MyHeader,
    MyOrder,
    MyTool
  }
}
</script>
<style lang="scss">

</style>

