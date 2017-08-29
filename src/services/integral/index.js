import ajax from '../ajax'

export function integralSales(oId, detailId, qty) {
  return ajax({
    "name": "integralSales",
    "ctype": "Web",
    "sessionStr": "B3B18F1384421A1AF839F11DAD35F7D8",
    "userid": 40,
    "reqbody": {
      "orderId": oId, //订单ID
      "detailID": detailId, //订单详情ID
      "entrustQty": qty //寄售数量
    }
  })
}
