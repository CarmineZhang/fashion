import ajax from '../ajax'

export function addCollection(id){
  return ajax({
    "name": "addCollection",
    "ctype": "Web",
    "sessionStr": "3634F440030595CC6B6B4F718BECA437",
    "userid": 2,
    "reqbody": {
      "commodityId":id //商品ID
    }
  })
}

export function deleteCollection(id){
  return ajax({
    "name": "deleteCollection",
    "ctype": "weChat",
    "sessionStr": "3634F440030595CC6B6B4F718BECA437",
    "userid": 2,
    "reqbody": {
      "commodityId":id //商品ID
    }
  })
}


export function queryCollection(){
  return ajax({
    "name": "queryCollection",
    "ctype": "weChat",
    "sessionStr": "3634F440030595CC6B6B4F718BECA437",
    "userid": 2
  })
}