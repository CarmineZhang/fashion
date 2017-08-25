import ajax from '../ajax'


/**
 * 
 * @param {*} cId 
 * @param {*} mId 
 */
export function getCategory(cId, mId) {
  return ajax({
    "name": "getCategory",
    "ctype": "Web",
    "reqbody": {
      "categoryId": cId, //目录ID
      "marketId": mId //1 普通市场目录   2 是积分市场目录OR跳蚤市场目录
    }
  })
}
