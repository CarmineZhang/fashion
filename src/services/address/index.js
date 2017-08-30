import ajax, {
  axios
} from '../ajax'
// import cookie from '@/libs/cookie'

export function getArea(id) {
  var url = `/json/${id}.json`
  return axios.get(url).catch((err) => {
    console.log(err)
  })
}

export function setAddrDefault(id) {
  return ajax({
    "name": "editDefAddr",
    "ctype": "weChat",
    "sessionStr": "BCBC8BB0E7FC40DB1F281BC3B50C2419",
    "userid": 40,
    "reqbody": {
      "defAddrID": id
    }
  })
}

export function getAddrList() {
  return ajax({
    "name": "queryAddr",
    "ctype": "weChat",
    "sessionStr": "BCBC8BB0E7FC40DB1F281BC3B50C2419",
    "userid": 40,
  })
}

export function editAddr(addr) {
  var name = 'addAddr'
  if (addr.addrID) {
    name = 'editAddr'
  }
  return ajax({
    "name": name,
    "ctype": "weChat",
    "sessionStr": "BCBC8BB0E7FC40DB1F281BC3B50C2419",
    "userid": 40,
    "reqbody": {
      "addrID": addr.addrID,
      "province": addr.province,
      "city": addr.city,
      'countyName': addr.countyName,
      'townName': addr.townName,
      'addressDetail': addr.addressDetail,
      'mobile': addr.mobile,
      'realName': addr.realName
    }
  })
}

export function delAddr(id) {
  return ajax({
    "name": "delAddr",
    "ctype": "weChat",
    "sessionStr": "BCBC8BB0E7FC40DB1F281BC3B50C2419",
    "userid": 40,
    "reqbody": {
      addrID: id
    }
  })
}
