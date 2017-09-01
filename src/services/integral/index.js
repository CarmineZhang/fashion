import ajax from '../ajax'

export function integralSales(oId, detailId) {
  return ajax({
    "name": "integralSales",
    "ctype": "weChat",
    "sessionStr": "BCBC8BB0E7FC40DB1F281BC3B50C2419",
    "userid": 40,
    "reqbody": {
      "orderId": oId, //订单ID
      "detailID": detailId, //订单详情ID
      "entrustQty": 1 //寄售数量
    }
  })
}

export function fleaTransfer(id) {
  return ajax({
    "name": "fleaTransfer",
    "ctype": "weChat",
    "sessionStr": "BCBC8BB0E7FC40DB1F281BC3B50C2419",
    "userid": 40,
    "reqbody": {
      "listOrderID": id //挂牌订单ID
    }

  })
}

export function queryFirmIntegral() {
  return ajax({
    "name": "queryFirmIntegral",
    "ctype": "weChat",
    "sessionStr": "BCBC8BB0E7FC40DB1F281BC3B50C2419",
    "userid": 40
  })
}

export function integralWithdrawOrder(id) {
  return ajax({
    "name": "integralWithdrawOrder",
    "ctype": "Web",
    "sessionStr": "BCBC8BB0E7FC40DB1F281BC3B50C2419",
    "userid": 40,
    "reqbody": {
      "listOrderID": id //挂牌订单ID
    }
  })
}
