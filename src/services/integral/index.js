import ajax from '../ajax'

export function integralSales(oId, detailId, qty) {
  return ajax({
    "name": "integralSales",
    "ctype": "Web",
    "sessionStr": "BCBC8BB0E7FC40DB1F281BC3B50C2419",
    "userid": 40,
    "reqbody": {
      "orderId": oId, //订单ID
      "detailID": detailId, //订单详情ID
      "entrustQty": qty //寄售数量
    }
  })
}

export function fleaTransfer(id) {
  return ajax({
    "name": "fleaTransfer",
    "ctype": "Web",
    "sessionStr": "BCBC8BB0E7FC40DB1F281BC3B50C2419",
    "userid": 40,
    "reqbody": {
      "listOrderID": id //挂牌订单ID
    }

  })
}
