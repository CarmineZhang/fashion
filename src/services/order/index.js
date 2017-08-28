import ajax from '../ajax'

export function queryOrders(status, index, size) {
  return ajax({
    "name": "queryOrders",
    "ctype": "weChat",
    "sessionStr": "3634F440030595CC6B6B4F718BECA437",
    "userid": 2,
    "reqbody": {
      "status": 0, // 0 查询全部订单  1查询待付款订单  3查询待发货订单 4查询待收货订单 5查询待评价订单
      "pageIndex": index,
      "pageSize": size
    }
  })
}
