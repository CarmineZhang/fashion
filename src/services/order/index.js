import ajax from '../ajax'

export function queryOrders(status, index) {
  return ajax({
    "name": "queryOrders",
    "ctype": "weChat",
    "sessionStr": "B3B18F1384421A1AF839F11DAD35F7D8",
    "userid": 40,
    "reqbody": {
      "status": status, // 0 查询全部订单  1查询待付款订单  3查询待发货订单 4查询待收货订单 5查询待评价订单
      "pageIndex": index,
      "pageSize": 10
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

export function queryFleaOrder(flag, index) {
  return ajax({
    "name": "queryFleaOrder",
    "ctype": "weChat",
    "sessionStr": "B3B18F1384421A1AF839F11DAD35F7D8",
    "userid": 40,
    "reqbody": {
      "bsFlag": flag, // 1、买方(求购) 2、卖方(寄售)      
      "pageIndex": index,
      "pageSize": 10
    }
  })
}

export function cancelOrder(id) {
  return ajax({
    "name": "userCancelOrder",
    "ctype": "weChat",
    "sessionStr": "B3B18F1384421A1AF839F11DAD35F7D8",
    "userid": 40,
    "reqbody": {
      "orderId": id
    }
  })
}

export function integralPickUp(oId, detailId, addrId, attrList) {
  return ajax({
    "name": "integralPickUp",
    "ctype": "weChat",
    "sessionStr": "B3B18F1384421A1AF839F11DAD35F7D8",
    "userid": 40,
    "reqbody": {
      "orderId": oId, //订单ID
      "detailID": detailId, //订单详情ID
      "deliveryQty": 1,
      "addrId": addrId,
      "propertyList": attrList
    }
  })
}
