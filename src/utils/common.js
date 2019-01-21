import axios from 'axios' 
 // 获取时间戳
 export default class Common {
  getTimestamp() {
    let date = new Date()
    let timestamp = date.getTime()
    return timestamp
  }
  
  // 参数加密
  getSign(arr) {
    let str = ''
    for (let i = 0; i < arr.length; i++) {
      str = str === '' ? `${arr[i][0]}=${arr[i][1]}` : `${str}&${arr[i][0]}=${arr[i][1]}`
    }
    console.log('加密参数：', str)
    return sha1.hex(str)
  }
  
  //获取token
  token() {
    return new Promise(function(resolve, reject) {
      axios({
        method: 'post',
        url: 'https://derucci.net/app/token.api',
        params: {
          key: '994061370314006529',
          secretKey:'477a1d7cc03d21d5abce55ec12170d3'
        }
      })
      .then((res) => {
        if (res) {
          resolve(res.data.token)
        }
      }).catch((error) => {
        if (error) {
          alert('token获取失败！')
        }
      })
    })
  }
 }
 