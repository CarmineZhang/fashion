import $ from '@/libs/domUtil'
class Scroll {
  constructor(el) {
    this.$container = $(el)
    this.$el = $(el).find('ul')
    this.childWidth = 80
    this.maxWidth = 0
    this.distance = 0
    this.start = {}
    this.end = {}
    this.move = {}
    this.clientWidth = document.body.clientWidth
    this._bind()
  }
  getDistance() {
    return this.distance
  }
  setDistance(index) {
    let distance = (index + 1) * this.childWidth
    let temp = this.distance
    if (distance > this.clientWidth) {
      temp = distance + 80 - this.clientWidth
    } else {
      temp = 0
    }
    if (temp > this.maxWidth) {
      temp = this.maxWidth
    }
    this.distance = -temp
    this._setTransition()
    this._setTransform()
  }
  _setTransform(offset) {
    offset = offset || 0
    let distance = this.distance
    distance += offset
    this.$el.css({
      '-webkit-transform': `translate3d(${distance}px,0, 0)`,
      'transform': `translate3d(${distance}px, 0, 0)`,
    })
  }

  _setTransition(duration) {
    console.log('transition')
    if (duration === 'none') {
      duration = 0
    } else {
      duration = 300
    }
    this.$el.css({
      '-webkit-transition': `all ${duration}ms ease`,
      'transition': `all ${duration}ms ease`,
    })
  }
  init() {
    this.maxWidth = this.$el[0].scrollWidth - this.clientWidth
  }
  _bind() {
    var me = this
    me.touchstartHandler = (e) => {
      let touch = e.touches[0]
      me.start.x = touch.pageX
      me.start.y = touch.pageY
      me._setTransition('none')
    }
    me.touchMoveHandler = (e) => {
      let touch = e.changedTouches[0]
      me.move.x = touch.pageX
      me.move.y = touch.pageY
      let distanceX = me.move.x - me.start.x
      let distanceY = me.move.y - me.start.y
      let noScrollerY = Math.abs(distanceX) > Math.abs(distanceY)
      console.log(distanceX)
      if (noScrollerY) {
        me._setTransform(distanceX)
      }
      noScrollerY && e.preventDefault()
    }
    me.touchEndHandler = (e) => {
      me.end.x = e.changedTouches[0].pageX
      me.end.y = e.changedTouches[0].pageY

      let distance = me.end.x - me.start.x
      if (distance !== 0) {
        me._trans(distance)
      }
    }
    me.$container.on('touchstart', me.touchstartHandler)
    me.$container.on('touchmove', me.touchMoveHandler)
    me.$container.on('touchend', me.touchEndHandler)
  }
  _trans(distance) {
    if (this.distance !== 0) {
      this.distance += distance
    } else {
      if (distance < 0) {
        this.distance += distance
      }
    }
    if (this.distance > 0) {
      this.distance = 0
    } else if (Math.abs(this.distance) > this.maxWidth) {
      this.distance = -this.maxWidth
    }
    this._setTransition()
    this._setTransform()
  }
  destory() {
    this.$el.offAll()
  }
}
export default Scroll
