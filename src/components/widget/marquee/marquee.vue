<template>
  <div class="marquee-wrapper" :style="{height:height + 'px'}">
    <ul class="marquee-box" ref="box" :style="{transform: `translate3d(0,${y}px,0)`, transition: `transform ${noAnimate ? 0 : 300}ms`}">
      <slot></slot>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'marquee',
  props: {
    interval: {
      type: Number,
      default: 2000
    },
  },
  data() {
    return {
      y: 0,
      height: 0,
      length: 0,
      curIndex: 0,
      noAnimate: false
    }
  },
  methods: {
    startMarquee() {
      this.destory()
      this.init()
      this.start()
    },
    destory() {
      this.timer && clearInterval(this.timer)
      this.curIndex = 0
      this.y = 0
    },
    init() {
      this.length = this.$refs.box.childNodes.length
      if (this.length === 0) {
        return false
      }
      if (this.cloneNode) {
        this.$refs.box.removeChild(this.cloneNode)
        this.cloneNode = null
      }
      let firstItem = this.$refs.box.firstElementChild
      this.height = firstItem.offsetHeight
      this.cloneNode = firstItem.cloneNode(true)
      this.$refs.box.appendChild(this.cloneNode)
      return true
    },
    start() {
      this.timer = setInterval(() => {
        this.curIndex += 1
        this.y = -this.curIndex * this.height
        if (this.curIndex === this.length) {
          setTimeout(() => {
            this.noAnimate = true
            this.curIndex = 0
            this.y = 0
          }, this.duration)
        } else {
          this.noAnimate = false
        }
      }, this.interval + 300)
    }
  }
}
</script>
<style lang="scss">
.marquee-wrapper {
  width: 100%;
  overflow: hidden;
}
</style>

