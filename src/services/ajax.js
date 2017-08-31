import axios from './interceptors'
let url = '/api'
export {
  axios
}
export default function ajax(data) {
  return axios.post(url, data)
}


export function upload(data) {
  let config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  };
  return axios.post('/api/Upload.do', data, config)
}
