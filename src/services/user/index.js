import ajax from '../ajax'

export function userInfo() {
  return ajax({
    "name": "userInfo",
    "ctype": "Web",
    "sessionStr": "3634F440030595CC6B6B4F718BECA437",
    "userid": 2
  })
}
