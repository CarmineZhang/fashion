import ajax from '../ajax'

export function queryOrders(status, index, size) {
  return ajax({
    "name": "queryOrders",
    "ctype": "weChat",
    "sessionStr": "B3B18F1384421A1AF839F11DAD35F7D8",
    "userid": 40,
    "reqbody": {
      "status": status, // 0 查询全部订单  1查询待付款订单  3查询待发货订单 4查询待收货订单 5查询待评价订单
      "pageIndex": index,
      "pageSize": size
    }
  })
}

export function queryIntegralOrder(index) {
  return ajax({
    "name": "queryIntegralOrder",
    "ctype": "weChat",
    "sessionStr": "B3B18F1384421A1AF839F11DAD35F7D8",
    "userid": 40,
    "reqbody": {
      "pageIndex": index,
      "pageSize": 10
    }
  })
}
