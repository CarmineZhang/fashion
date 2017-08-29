import ajax from '../ajax'

export function addCollection(id) {
  return ajax({
    "name": "addCollection",
    "ctype": "Web",
    "sessionStr": "A239EE8058794C568857CA68A21403C1",
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
    "sessionStr": "A239EE8058794C568857CA68A21403C1",
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
    "sessionStr": "A239EE8058794C568857CA68A21403C1",
    "userid": 40
  })
}
