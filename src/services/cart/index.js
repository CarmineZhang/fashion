import ajax from '../ajax'

export function addToCart(cId, qty, list) {
  return ajax({
    "name": "addToCart",
    "ctype": "weChat",
    "sessionStr": "BCBC8BB0E7FC40DB1F281BC3B50C2419",
    "userid": 40,
    "reqbody": {
      "commodityId": cId, //商品ID
      "quantity": qty, //数量
      "list": list
    }
  })
}

export function updateToCart(detailId, qty) {
  return ajax({
    "name": "updateToCart",
    "ctype": "Web",
    "sessionStr": "BCBC8BB0E7FC40DB1F281BC3B50C2419",
    "userid": 40,
    "reqbody": {
      "detailId": detailId,
      "qty": qty
    }
  })
}

export function delCartDetail(list) {
  return ajax({
    "name": "delCartDetail",
    "ctype": "Web",
    "sessionStr": "BCBC8BB0E7FC40DB1F281BC3B50C2419",
    "userid": 40,
    "reqbody": {
      "detailList": list
    }
  })
}



export function queryCart() {
  return ajax({
    "name": "queryToCart",
    "ctype": "Web",
    "sessionStr": "BCBC8BB0E7FC40DB1F281BC3B50C2419",
    "userid": 40
  })
}
