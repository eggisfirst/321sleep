import { Request } from './request'
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
  getPrizes (date, type) {
    return this.getData({
      url: 'https://mobiletest.derucci.net/consumer-admin/api/lotteryuser/v1/getPrizes',
      params: {
        date: date,
        type: type
      }
    })
  }
}

export { IndexModel }
