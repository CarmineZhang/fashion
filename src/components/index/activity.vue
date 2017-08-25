<template>
  <div class="activity-wrapper">
    <a class="activity-header">
      <img :src="first.image" alt="">
    </a>
    <div class="activity-body">
      <a href="" class="item" v-for="(item,index) in restActivities" :key="index"><img :src="item.image" alt=""></a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'activity',
  computed: {
    activities() {
      return this.$store.state.home.activities
    },
    first() {
      if (this.activities.length > 0) {
        return this.activities[0]
      }
      return {}
    },
    restActivities() {
      if (this.activities.length > 1) {
        return this.activities.slice(1)
      }
      return []
    }
  },
  created() {
    this.$store.dispatch('getActivities')
  }

}
</script>
.<style lang="scss">
.activity-wrapper {
  .activity-header {
    position: relative;
    padding-top: (174px/2);
    display: block;
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      width: (712/750)*100%;
      height: auto;
      transform: translate3d(-50%, -50%, 0)
    }
  }

  .activity-body {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 .1rem;
    .item {
      width: 3.53rem;
      height: 1.71rem;
      margin-bottom: .1rem;
      img {
        width: 100%;
      }
    }
  }
}
</style>

