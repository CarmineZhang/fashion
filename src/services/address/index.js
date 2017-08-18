import ajax, {
  axios
} from '../ajax'
import cookie from '@/libs/cookie'

export function getArea(id) {
  var url = `/json/${id}.json`
  return axios.get(url).catch((err) => {
    console.log(err)
  })
}

export function getAddrList() {
  return ajax.post({
    "name": "queryAddr",
    "ctype": "weChat",
    "sessionStr": cookie('sessionStr'),
    "userid": cookie('userId')
  })
}

export function editAddr(realName, mobile, province, city, countyName, townName, detail, addrId) {
  var name = 'addAddr'
  if (addrId) {
    name = 'editAddr'
  }
  return ajax({
    "name": name,
    "ctype": "weChat",
    "sessionStr": cookie('sessionStr'),
    "userid": cookie('userId'),
    "reqbody": {
      "addrID": addrId,
      "province": province,
      "city": city,
      countyName: countyName,
      townName: townName,
      "addressDetail": detail,
      "mobile": mobile,
      realName: realName
    }
  })
}

export function delAddr(id) {
  return ajax({
    "name": "delAddr",
    "ctype": "weChat",
    "sessionStr": cookie('sessionStr'),
    "userid": cookie('userId'),
    "reqbody": {
      addrID: id
    }
  })
}
