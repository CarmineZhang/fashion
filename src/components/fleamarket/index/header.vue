<template>
  <div class="header-wrapper fm-header">
    <div class="header-back" @click="back"></div>
    <div class="header-nav">
      <a class="nav-item" :class="{'cur':name==='flea-sale'}" @click="showSale">
        <span>寄售</span>
      </a>
      <a class="nav-item" :class="{'cur':name==='flea-buy'}" @click="showBuy">
        <span>求购</span>
      </a>
    </div>
    <div class="pub" @click="publish">发布</div>
  </div>
</template>
<script>
export default {
  name: 'flex-market-header',
  computed: {
    name() {
      return this.$store.state.route.name
    }
  },
  methods: {
    showSale() {
      this.$router.push({ name: 'flea-sale' })
    },
    showBuy() {
      this.$router.push({ name: 'flea-buy' })
    },
    publish() {
      this.$router.push('/publish')
    },
    back() {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss">
.fm-header {
  .header-back {
    width: 60px;
  }
  .pub {
    width: 60px;
    color: #fff;
    text-align: right;
    padding-right: 20px;
    line-height: 40px;
  }
}
</style>


