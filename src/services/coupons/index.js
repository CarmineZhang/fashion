import ajax from '../ajax'


export function queryCoupons() {
  return ajax({
    "name": "queryCoupons",
    "ctype": "weChat",
    "sessionStr": "BCBC8BB0E7FC40DB1F281BC3B50C2419",
    "userid": 40
  })
}

export function bindCoupons(id) {
  return ajax({
    "name": "bindCoupons",
    "ctype": "weChat",
    "sessionStr": "BCBC8BB0E7FC40DB1F281BC3B50C2419",
    "userid": 40,
    "reqbody": {
      "couponsID": id
    }
  })
}

export function bindNewCoupons(no) {
  return ajax({
    "name": "bindNewCoupons",
    "ctype": "weChat",
    "sessionStr": "BCBC8BB0E7FC40DB1F281BC3B50C2419",
    "userid": 40,
    "reqbody": {
      "uniquelyNo": no, //唯一识别码
    }
  })
}
