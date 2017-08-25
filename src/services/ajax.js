import axios from './interceptors'
let url = '/api'
export {
  axios
}
export default function ajax(data) {
  return axios.post(url, data)
}
