import { Request } from './request'
import { getTimestamp } from './rotate'
class IndexModel extends Request {
  // 模拟获取抽奖类型
  // getAwardList() {
  //   return this.getData({
  //     url: '/good/seller',
  //   })
  // }
  getPro () {
    return this.getData({
      url: 'https://agency.derucci.com/v1/api/public/province'
    })
  }
  getCity (code) {
    return this.getData({
      url: 'https://agency.derucci.com/v1/api/public/city',
      params: {
        province: code
      }
    })
  }
  getArea (code) {
    return this.getData({
      url: 'https://agency.derucci.com/v1/api/public/area',
      params: {
        city: code
      }
    })
  }
  //客户录入保存信息
  saveData (obj) {
    return this.getPostData({
      url: 'https://mobiletest.derucci.net/consumer-admin/api/lotteryuser/v1/save',
      data: {
        prizeType: obj.prizeType,
        username: obj.username,
        phone: obj.phone,
        province: obj.province,
        city: obj.city,
        shopName: obj.shopName,
        dealerName: obj.dealerName,
        field1: obj.field1 ? obj.field1 : ''
      }
    })
  }
  //4/1抽奖
  getPrizes (date, type) {
    return this.getData({
      url: 'https://mobiletest.derucci.net/consumer-admin/api/lotteryuser/v1/getPrizes',
      params: {
        date: date,
        type: type
      }
    })
  }
  //获取用户unionid
  getUnionId(code) {
    return this.getData({
      url: 'https://derucci.net/api/public/v1/getWxAccessToken',
      params: {
        code:code,
        appId:'wx877a7e37b0de0a87',
        timestamp:getTimestamp(), 
      }
    })
  }
  //转盘抽奖后保存信息
  rotateSaveInfo(unionId, type) {
    return this.getPostData({
      url: 'https://mobiletest.derucci.net/consumer-admin/api/lotteryuser/v1/saveturntable',
      data: {
        // unionId: 'o6a0M1M6d84ygn5COQvDVwDdEHu4',
        // unionId: 'o6a0M1LJgn_Y7V2F8r92NoKIOplQ',
        unionId: unionId,
        filed1: type
      }
    })
  }
  //获取用户信息
  rotateGetInfo(unionId) {
    return this.getData({
      url: 'https://mobiletest.derucci.net/consumer-admin/api/lotteryuser/v1/turntable',
      params: {
        unionId: unionId
        // unionId: 'o6a0M1LJgn_Y7V2F8r92NoKIOplQ'
        // unionId: 'o6a0M1M6d84ygn5COQvDVwDdEHu4'
      }
    })
  }
}

export { IndexModel }
