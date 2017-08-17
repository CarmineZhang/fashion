import axios from './interceptors'
let url = ''
export {
  axios
}
export default function ajax(data) {
  return axios.post(url, data)
}
