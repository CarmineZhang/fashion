import http from '@/services'

export var areaList = {}

export function getArea(id) {
  return http.getArea(id).then((res) => {
    areaList[id] = res.data
  })
}
