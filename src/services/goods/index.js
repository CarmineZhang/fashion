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

export function commodityEvaluate(cId, index, size) {
  return ajax({
    "name": "commodityEvaluate",
    "ctype": "weChat",
    "reqbody": {
      "commodityId": cId, //商品唯一标识
      "pageIndex": index, //当前页码
      "pageSize": size //每页条数
    }
  })
}

export function commoditySearch(key, index, size) {
  return ajax({
    "name": "commoditySearch",
    "ctype": "weChat",
    "reqbody": {
      "key": key,
      "sales": "0",
      "marketId": 1,
      "pageIndex": index,
      "pageSize": size
    }
  })
}

export function directBuy(addrId, totalCost, invoiceFlag, invoiceId, list, integralFlag, cartDetaiLID, couponsStatus, couponsIdList) {
  return ajax({
    "name": "directBuy",
    "ctype": "weChat",
    "sessionStr": "BCBC8BB0E7FC40DB1F281BC3B50C2419",
    "userid": 40,
    "reqbody": {
      "addrId": addrId, //收货地址  积分商品为空
      "totalCost": totalCost, //订单总金额
      "freight": 16.00, //订单运费
      "brokerFirmId": 12, //经纪人
      "invoiceFlag": invoiceFlag,
      "infoID": invoiceId, //发票信息ID
      "accumulate": integralFlag, //是否使用积分 0 不使用 ,1使用
      "list": list,
      "cartDetaiLID": cartDetaiLID, //购物车下单填写
      "couponsStatus": couponsStatus, //是否使用代金券 0不使用  1使用 
      "couponsIdList": couponsIdList
    }
  })
}

export function couponsDirectBuy(totalCost, list) {
  return ajax({
    "name": "directBuy",
    "ctype": "weChat",
    "sessionStr": "BCBC8BB0E7FC40DB1F281BC3B50C2419",
    "userid": 40,
    "reqbody": {
      "totalCost": totalCost, //订单总金额
      "brokerFirmId": 12, //经纪人
      "list": list,
    }
  })
}

export function integralExchange(totalCost, list) {
  return ajax({
    "name": "directBuy",
    "ctype": "weChat",
    "sessionStr": "BCBC8BB0E7FC40DB1F281BC3B50C2419",
    "userid": 40,
    "reqbody": {
      "totalCost": totalCost, //订单总金额
      "freight": 0,
      "invoiceFlag": 0,
      "accumulate": 0, //是否使用积分 0 不使用 ,1使用
      "list": list
    }
  })
}

export function fleaMarketTrade(id) {
  return ajax({
    "name": "fleaMarketTrade",
    "ctype": "weChat",
    "sessionStr": "BCBC8BB0E7FC40DB1F281BC3B50C2419",
    "userid": 40,
    "reqbody": {
      "listOrderID": id //挂牌订单ID
    }
  })
}
