import ajax from '../ajax'

export function integralSales(oId, detailId, qty) {
  return ajax({
    "name": "integralSales",
    "ctype": "Web",
    "sessionStr": "A239EE8058794C568857CA68A21403C1",
    "userid": 40,
    "reqbody": {
      "orderId": oId, //订单ID
      "detailID": detailId, //订单详情ID
      "entrustQty": qty //寄售数量
    }
  })
}
