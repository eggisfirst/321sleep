import { Request } from './request'

class IndexModel extends Request {
  //模拟获取抽奖类型
  getAwardList() {
    return this.getData({
      url: '/good/seller',
    })
  }
  //抽奖接口
  // getDrawLottery(prizeId, drawNum) {
  //   return this.getData({
  //     url: '/lotteryWinner/drawLottery',
  //     params: {
  //       prizeId: prizeId, // 奖品id
  //       drawNum:  drawNum// 抽奖人数
  //     }
  //   })
  // }

}

export { IndexModel }