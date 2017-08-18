import ajax from '../ajax'

/**
 * 
 * @param {*} type 
 * //1获取主页第一栏图片活动信息  2 获取主页第二栏信息 3,获取积分商城图片活动信息 4, 获取跳蚤市场图片活动信息 
 */
export function getHomeBanner(type) {
  return ajax({
    "name": "homePage",
    "ctype": "weChat",
    "reqbody": {
      "type": type
    }
  })
}
/**
 * 
 * @param {*} type 
 * //1、获取普通商品分类  2、获取积分商品分类  3、获取跳蚤市场商品分类
 */
export function getHomePageSort(type) {
  return ajax({
    "name": "homePageSort",
    "ctype": "weChat",
    "reqbody": {
      "type": type
    }
  })
}
