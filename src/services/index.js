import axios from './interceptors'

// function ajax(url, data) {
//   return axios.post(url, data)
// }

function getArea(id) {
  var url = `/json/${id}.json`
  return axios.get(url)
    .catch(function (error) {
      console.log(error);
    })
}

export default {
  getArea
}
