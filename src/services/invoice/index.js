import ajax from '../ajax'

/**
 * 查询发票信息
 */
export function queryInvoiceInfo(){
  return ajax({
    "name": "queryInvoiceInfo",
    "ctype": "weChat",
    "sessionStr": "3634F440030595CC6B6B4F718BECA437",
    "userid": 2
  })
}

export function addInvoiceInfo(header,no){
  return ajax({
    "name": "addInvoiceInfo",
    "ctype": "weChat",
    "sessionStr": "3634F440030595CC6B6B4F718BECA437",
    "userid": 2,
    "reqbody": {
      "header":header, //发票抬头
      "dutyNo":no //税号
    }
  })
}

export function updateInvoiceInfo(id,header,no){
  return ajax({
    "name": "addInvoiceInfo",
    "ctype": "Web",
    "sessionStr": "3634F440030595CC6B6B4F718BECA437",
    "userid": 2,
    "reqbody": {
      "infoId":id, //发票信息ID
      "header":header, //发票抬头
      "dutyNo":no //税号
    }
  })
}

export function deleteInvoiceInfo(id){
  return ajax({
    "name": "deleteInvoiceInfo",
    "ctype": "Web",
    "sessionStr": "3634F440030595CC6B6B4F718BECA437",
    "userid": 2,
    "reqbody": {
      "infoID":id //发票信息ID
    }
  })
}