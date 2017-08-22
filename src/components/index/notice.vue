<template>
  <div class="index-notice">
    <div class="notice-img">
    </div>
    <div class="notice-body">
      <marquee>
        <marquee-item v-for="(item,index) in notices" :key="index">
          <span>{{item}}</span>
        </marquee-item>
      </marquee>
    </div>
  </div>
</template>
<script>
import { Marquee, MarqueeItem } from '@/components/widget/marquee'
export default {
  name: 'notice',
  components: {
    Marquee,
    MarqueeItem
  },
  mounted() {
    console.log('notice mount')
    setTimeout(() => {
      this.notices = ['测试', '习近平强调，设立中国国际发展知识中心，是我在2015年9月联合国发展峰会上宣布的一项重要举措。我很高兴看到知识中心正式成立，希望中心为研究交流发展理念、促进国际发展合作、推动全球落实可持续发展议程作出积极贡献']
    }, 1000);
  },
  data() {
    return {
      notices: [],
      startMarquee: false
    }
  }
}
</script>
<style lang="scss">
.index-notice {
  background-color: #fff;
  display: flex;
  .notice-img {
    height: 55px;
    width: 60px;
    background: url('../../assets/index/notice.png') no-repeat;
    background-position: 50%;
    background-size: (77px/2);
  }
  .notice-body {
    flex: 1;
    li {
      height: 55px;
      position: relative;
      span {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        @include ellipsisLn();
      }
    }
  }
}
</style>

