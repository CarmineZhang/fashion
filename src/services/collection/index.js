import ajax from '../ajax'

export function addCollection(id) {
  return ajax({
    "name": "addCollection",
    "ctype": "Web",
    "sessionStr": "BCBC8BB0E7FC40DB1F281BC3B50C2419",
    "userid": 40,
    "reqbody": {
      "commodityId": id //商品ID
    }
  })
}

export function deleteCollection(id) {
  return ajax({
    "name": "deleteCollection",
    "ctype": "weChat",
    "sessionStr": "BCBC8BB0E7FC40DB1F281BC3B50C2419",
    "userid": 40,
    "reqbody": {
      "commodityId": id //商品ID
    }
  })
}


export function queryCollection() {
  return ajax({
    "name": "queryCollection",
    "ctype": "weChat",
    "sessionStr": "BCBC8BB0E7FC40DB1F281BC3B50C2419",
    "userid": 40
  })
}
