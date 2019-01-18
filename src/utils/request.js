import axios from 'axios' 
class Request {
  baseUrl = ''   
  // baseUrl = 'https://derucci.net/api'
  
  getData({url, params, method = "GET" }) {
    return new Promise((resolve, reject) => {
      axios({
        url: this.baseUrl + url,
        params: params,
        method: method
      }).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }
  getPostData({url, data}) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: this.baseUrl + url,
        data: data,
      }).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      });
    })
  }
}

export {Request}