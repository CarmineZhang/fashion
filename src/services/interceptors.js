import axios from 'axios'
import router from '../router'
axios.interceptors.response.use(
  response => {
    console.dir(response)
    let status = response.status
    if (status === 200) {
      let resData = response.data
      if (resData != null) {
        return resData
      }
    }
    return {
      "retcode": -99999,
      "msg": "服务器异常"
    }
  },
  error => {
    if (error) {
      console.log(error)
    }
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(res => {
  if (res.retcode && res.retcode === -17401) {
    router.push('/login')
    return res
  } else {
    return res;
  }
})

export default axios
