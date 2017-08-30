import ajax from '../ajax'

/**
 * 查询发票信息
 */
export function queryInvoiceInfo() {
  return ajax({
    "name": "queryInvoiceInfo",
    "ctype": "weChat",
    "sessionStr": "BCBC8BB0E7FC40DB1F281BC3B50C2419",
    "userid": 40
  })
}

export function addInvoiceInfo(header, no) {
  return ajax({
    "name": "addInvoiceInfo",
    "ctype": "weChat",
    "sessionStr": "BCBC8BB0E7FC40DB1F281BC3B50C2419",
    "userid": 40,
    "reqbody": {
      "header": header, //发票抬头
      "dutyNo": no //税号
    }
  })
}

export function updateInvoiceInfo(id, header, no) {
  return ajax({
    "name": "updateInvoiceInfo",
    "ctype": "weChat",
    "sessionStr": "BCBC8BB0E7FC40DB1F281BC3B50C2419",
    "userid": 40,
    "reqbody": {
      "infoId": id, //发票信息ID
      "header": header, //发票抬头
      "dutyNo": no //税号
    }
  })
}

export function deleteInvoiceInfo(id) {
  return ajax({
    "name": "deleteInvoiceInfo",
    "ctype": "weChat",
    "sessionStr": "BCBC8BB0E7FC40DB1F281BC3B50C2419",
    "userid": 40,
    "reqbody": {
      "infoID": id //发票信息ID
    }
  })
}
