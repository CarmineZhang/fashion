import ajax from '../ajax'

export function addCollection(id) {
  return ajax({
    "name": "addCollection",
    "ctype": "Web",
    "sessionStr": "B3B18F1384421A1AF839F11DAD35F7D8",
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
    "sessionStr": "B3B18F1384421A1AF839F11DAD35F7D8",
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
    "sessionStr": "B3B18F1384421A1AF839F11DAD35F7D8",
    "userid": 40
  })
}
