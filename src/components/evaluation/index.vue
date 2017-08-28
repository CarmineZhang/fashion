<template>
  <div>
    <div class="header-wrapper">
      <div class="header-back"></div>
      <div class="header-info">发表评价</div>
    </div>
    <div>
      <star></star>
    </div>
    <div>
      <textarea  cols="30" rows="10"></textarea>
    </div>
    <input type="file" name="" id="" accept="image/gif,image,jpg,png">
    <div class="footer-action">
      <a class="action">发表评价</a>
    </div>
  </div>
</template>
<script>
import Star from '@/components/widget/star'
export default {
  name: 'evaluation',
  components:{
    Star
  }
}
</script>

