import ajax from '../ajax'


/**
 * 
 * @param {*} cId 
 * @param {*} mId 
 */
export function getCommodity(cId, mId, index, size) {
  return ajax({
    "name": "getCommodity",
    "ctype": "weChat",
    "reqbody": {
      "categoryId": cId, //商品目录ID
      "marketID": mId, //市场ID 1普通市场  2 积分市场  3、获取跳蚤市场(寄售)商品  4、获取跳蚤市场(求购)商品
      "pageIndex": index, //当前页码
      "pageSize": size //每页条数
    }
  })
}

export function commodityDetail(cId) {
  return ajax({
    "name": "commodityDetail",
    "ctype": "weChat",
    "reqbody": {
      "commodityId": cId
    }
  })
}
