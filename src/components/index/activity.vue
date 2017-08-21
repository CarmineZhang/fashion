<template>
  <div class="activity-wrapper">
    <a class="activity-header">
      <img src="../../assets/index/act-header.png" alt="">
    </a>
    <div class="activity-body">
      <a href="" class="item"><img src="../../assets/index/a1.png" alt=""></a>
      <a href="" class="item"><img src="../../assets/index/a2.png" alt=""></a>
      <a href="" class="item"><img src="../../assets/index/a3.png" alt=""></a>
      <a href="" class="item"><img src="../../assets/index/a4.png" alt=""></a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'activity'
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

