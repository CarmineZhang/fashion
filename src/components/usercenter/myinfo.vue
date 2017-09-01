<template>
  <div class="my-header-wrap">
    <div class="header-main">
      <div class="img-wrapper">
        <div class="my-header-avatar">
          <img :src="user.icon" alt="">
        </div>
      </div>
      <div class="user-info" @click="gotoSetting">
        <div class="user-name" v-text="user.name">
        </div>
        <div class="user-id">
          ID:{{user.userCode}}
        </div>
        <div class="user-grade"></div>
      </div>
    </div>
    <div class="my-header-info">
      <div class="my-header-info-item">
        <p v-text="user.balance"></p>
        <p>余额</p>
      </div>
      <div class="my-header-info-item">
        <p v-text="user.integral"></p>
        <p>积分</p>
      </div>
      <div class="my-header-info-item" @click="showCollection">
        <p v-text="user.collection"></p>
        <p>收藏</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'my-header',
  computed: {
    user() {
      return this.$store.state.user.info
    }
  },
  methods: {
    showCollection() {
      this.$router.push('/collection')
    },
    gotoSetting() {
      this.$router.push('/setting')
    }
  }
}
</script>
<style lang="scss">
.my-header-wrap {
  margin-bottom: 10px;
  background-color: #fff;
  font-size: 12px;
  .header-main {
    position: relative;
    display: flex;
    padding: 10px 10px;
    height: 1.98rem;
    @include bottomline();
    .img-wrapper {
      position: relative;
      width: 1.5rem;
      .my-header-avatar {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 1.43rem;
        height: 1.43rem;
        border: 1px solid hsla(0, 0%, 100%, .4);
        border-radius: (1.43rem/2);
        box-shadow: 0 2px 10px rgba(0, 0, 0, .15);
        img {
          width: 100%;
          border-radius: (1.43rem/2);
        }
      }
    }
    .user-info {
      flex: 1;
      padding-left: 15px;
      padding-right: 20px;
      position: relative;
      font-size: 14px;
      @include arrow-right();
      display: flex;
      flex-direction: column;
      div {
        flex: 1;
      }
      .user-id {
        font-size: 12px;
        color: #999;
      }
    }
  }
  .my-header-info {
    display: flex;
    color: #999;
    height: 1.08rem;
    .my-header-info-item {
      margin: 10px 0;
      flex: 1;
      text-align: center;
      position: relative;
      @include rightline();
    }
    .my-header-info-item:last-child {
      &:before {
        display: none;
      }
    }
  }
}
</style>


