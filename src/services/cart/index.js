import ajax from '../ajax'

export function addToCart(cId, qty, list) {
  return ajax({
    "name": "addToCart",
    "ctype": "weChat",
    "sessionStr": "A239EE8058794C568857CA68A21403C1",
    "userid": 40,
    "reqbody": {
      "commodityId": cId, //商品ID
      "quantity": qty, //数量
      "list": list
    }
  })
}
