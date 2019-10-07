import axios from 'axios'
import sha1 from 'js-sha1'
class Request {

  getData({ url, params, method = 'GET' }) {
    return new Promise((resolve, reject) => {
      axios({
        url: url,
        params: params,
        method: method
      }).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }

  getPostData({ url, data }) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: url,
        params: data,
        // headers: {
        //   'Content-Type': 'application/json',
        // }
      }).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
  /**有token */
  getTokenPostData({ url, data }) {
    return new Promise((resolve, reject) => {
      this._getToken().then(res => {
        if (res.access_token) {
          localStorage.setItem('token', res.refresh_token);
          const sign = this._getSign(data, res.access_token)
          axios({
            method: 'get',
            url: url,
            // contentType: "application/json",
            headers: {
              "Authorization": `Bearer ${res.access_token}`,
              'sign': sign
            },
            params: data,
          })
            .then(res => {
              resolve(res)
            }).catch(err => {
              reject(err)
            })

        } else {
          this._refreshToken().then(res => {
            if (res.access_token) {
              alert('请重新预约')
              // this.getTokenPostData()
            }
          })
        }
      })
    })
  }

  _getToken() {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        // url: this.furao + "/oauth/token",
        url: this.newSellUrl + "/oauth/token",
        params: {
          grant_type: 'client_credentials',
          client_id: '20180813132820',
          client_secret: 'eeddbaac768542658f79664983e39a07'
        },
        header: { 'content-type': 'application/x-www-form-urlencoded' },
      })
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })

    })

  }

  _refreshToken() {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        // url: this.furao + "/oauth/token",
        url: this.newSellUrl + "/oauth/token",
        params: {
          grant_type: 'refresh_token',
          refresh_token: localStorage.getItem('token'),
        },
        header: { 'content-type': 'application/x-www-form-urlencoded' },
      })
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })

    })
  }

  //加密参数
  _getSign(obj, token) {
    // console.log(obj)
    let str = ""
    let keyArr = []
    for (let key in obj) {
      keyArr.push(key)
    }
    keyArr.sort((a, b) => {
      return a.length - b.length
    })
    keyArr.map((item, index) => {
      if (obj[item]) {
        if (!str) {
          str = `${item}=${obj[item]}`
        } else {
          str += `&${item}=${obj[item]}`
        }
      }
    })
    return sha1(str + token)
  }
}

export { Request }
