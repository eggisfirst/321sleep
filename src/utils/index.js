import { Request } from './request'
import { getTimestamp } from './rotate'
class IndexModel extends Request {
  baseUrl = 'https://derucci.net'
  testUrl = 'https://mobiletest.derucci.net/cd-sys-web' //营销助手接口的测试区
  testUrl2 = 'https://mobiletest.derucci.net/consumer-admin' //新零售报名的测试区
  // newSellUrl = 'https://qiang.derucci.com'
  newSellUrl = 'https://agency.derucci.com'  //姓名检测的正式区
  signUrl = 'https://qiang.derucci.com'  //新零售报名的正式区


  test = 'http://10.11.8.164:8080'
  furao = 'http://10.11.8.17:8080'
  // 模拟获取抽奖类型
  // getAwardList() {
  //   return this.getData({
  //     url: '/good/seller',
  //   })
  // }
  getPro () {
    return this.getData({
      url: 'https://derucci.net/api/public/v1/region',
      params: {
        type: 'PROVINCE'
      }
    })
  }
  getCity (code) {
    return this.getData({
      url: 'https://derucci.net/api/public/v1/region',
      params: {
        parentCode: code,
        type: 'CITY'
      }
    })
  }
  getArea (code) {
    return this.getData({
      url: 'https://derucci.net/api/public/v1/region',
      params: {
        parentCode: code,
        type: 'AREA'
      }
    })
  }
  // 客户录入保存信息
  saveData (obj) {
    return this.getPostData({
      url: this.baseUrl + '/api/lotteryuser/v1/save',
      data: {
        prizeType: '618',
        username: obj.username,
        phone: obj.phone,
        province: obj.province,
        city: obj.city,
        shopName: obj.shopName,
        dealerName: obj.dealerName,
        amount: obj.amount 
      }
    })
  }
  // 4/1抽奖
  getPrizes (date, type) {
    return this.getData({
      url: this.baseUrl + '/api/lotteryuser/v1/getPrizes',
      params: {
        date: date,
        type: type
      }
    })
  }
  // 获取用户unionid
  getUnionId (code) {
    return this.getData({
      url: this.baseUrl + '/api/public/v1/getWxAccessToken',
      params: {
        code: code,
        appId: 'wx877a7e37b0de0a87',
        timestamp: getTimestamp()
      }
    })
  }
  // 转盘抽奖后保存信息
  rotateSaveInfo (unionId, type) {
    return this.getPostData({
      url: this.testUrl + '/api/lotteryuser/v1/saveturntable',
      data: {
        // unionId: 'o6a0M1M6d84ygn5COQvDVwDdEHu4',
        // unionId: 'o6a0M1LJgn_Y7V2F8r92NoKIOplQ',
        unionId: unionId,
        filed1: type
      }
    })
  }
  // 获取用户信息
  rotateGetInfo (unionId) {
    return this.getData({
      url: this.testUrl + '/api/lotteryuser/v1/turntable',
      params: {
        unionId: unionId
        // unionId: 'o6a0M1LJgn_Y7V2F8r92NoKIOplQ'
        // unionId: 'o6a0M1M6d84ygn5COQvDVwDdEHu4'
      }
    })
  }


  //新零售
  activitySignUp(obj) {
    return this.getPostData({
      url: this.test + '/v1/api/useraddress/activitySignUp',
      // url: this.testUrl2 + '/v1/api/useraddress/activitySignUp',
      // url: this.signUrl + '/v1/api/useraddress/activitySignUp',
      data: obj
    })
  }

   //检查姓氏是否存在
   checkLastName(lastName) {
    return this.getTokenPostData({
      // url: this.testUrl + '/v2/app/check/lastname',
      url: this.newSellUrl + '/v2/app/check/lastname',
      data: {
        lastName
      }
    })
  }

}

export { IndexModel }
