<template>
  <div>
    <router-view></router-view>
    <ve-footer></ve-footer>
  </div>
</template>
<script>
import VeFooter from '../footer'
export default {
  name: 'index',
  components: {
    VeFooter
  }
}
</script>

