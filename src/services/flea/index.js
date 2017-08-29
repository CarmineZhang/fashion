import ajax from '../ajax'

export function fleaBuying(id){
  return ajax({
    "name": "fleaBuying",
    "ctype": "weChat",
    "sessionStr": "BCBC8BB0E7FC40DB1F281BC3B50C2419",
    "userid": 40,
    "reqbody": {
      "commodityId":id,
      "entrustQty":1
    }
  })
}

export function withdrawOrder(id){
  return ajax({
    "name": "withdrawOrder",
    "ctype": "Web",
    "sessionStr": "BCBC8BB0E7FC40DB1F281BC3B50C2419",
    "userid": 40,
    "reqbody": {
      "listOrderID":id //挂牌订单ID
    }	
  })
}
