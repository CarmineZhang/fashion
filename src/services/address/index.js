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

export function setAddrDefault(id) {
  return ajax.post({
    "name": "editDefAddr",
    "ctype": "weChat",
    "sessionStr": cookie('sessionStr'),
    "userid": cookie('userId'),
    "reqbody": {
      "defAddrID": id
    }
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

export function editAddr(addr) {
  var name = 'addAddr'
  if (addr.addrId) {
    name = 'editAddr'
  }
  return ajax({
    "name": name,
    "ctype": "weChat",
    "sessionStr": cookie('sessionStr'),
    "userid": cookie('userId'),
    "reqbody": {
      "addrID": addr.addrId,
      "province": addr.province,
      "city": addr.city,
      'countyName': addr.county,
      'townName': addr.town,
      'addressDetail': addr.detail,
      'mobile': addr.mobile,
      'realName': addr.realName
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
