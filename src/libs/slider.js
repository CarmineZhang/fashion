;
(function ($) {
  var arr = {}
  $.fn.sliderToLeft = function () {
    $(this).on('touchstart', '.address', function (e) {
      e.stopPropagation()
      var targetObj = this
      initX = e.targetTouches[0].pageX;
      initY = e.targetTouches[0].pageY;
      arr[targetObj] = {
        x: initX,
        y: initY,
        left: $(this).find('ul').offset().left
      }
    })

    $(this).on('touchmove', '.address', function (e) {
      e.stopPropagation()
      var currentObj = arr[this]
      var touches = event.targetTouches[0];
      if (currentObj) {
        var x = touches.pageX - currentObj.x
        var y = touches.pageY - currentObj.y
        if (Math.abs(x) > Math.abs(y)) {
          event.preventDefault();
        }
        var firstEl = $(this).find('ul'),
          left = currentObj.left
        if (x < -70) {
          x = -70
        }
        if (left === 0 && x >= 0) {
          x = 0
        } else if (left < 0 && x > 0) {
          x = left + x
        }
        if (x > 0) {
          x = 0
        }
        firstEl.css({
          'transform': 'translateX(' + x + 'px)',
          'transition': 'transform 0s ease;'
        })
      }
    })
    $(this).on('touchend', '.address', function (e) {
      e.stopPropagation()
      var endX = e.changedTouches[0].pageX;
      var endY = e.changedTouches[0].pageY;
      var currentObj = arr[this]
      if (currentObj) {
        var x = endX - initX;
        if (x === 0) {
          //点击事件也会出发touch事件
          return;
        }
        var firstEl = $(this).find('ul'),
          left = currentObj.left
        if (x > 0 && left < 0) {
          //右滑
          firstEl.css({
            'transform': 'translateX(0px)',
            'transition': 'transform 0.5s ease;'
          })
        } else if (left === 0 && x < -50) {
          firstEl.css({
            'transform': 'translateX(-70px)',
            'transition': 'transform 0.5s ease;'
          })
        } else {
          firstEl.css({
            'transform': 'translateX(0px)',
            'transition': 'transform 0.5s ease;'
          })
        }
      }
    })
  }
}(Zepto))
