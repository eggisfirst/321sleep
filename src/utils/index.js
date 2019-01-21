import { Request } from './request'
class IndexModel extends Request {
  //模拟获取抽奖类型
  getAwardList() {
    return this.getData({
      url: '/good/seller',
    })
  }
}

export { IndexModel }