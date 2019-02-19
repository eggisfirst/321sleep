<template>
  <div class="rotating">
    <div class="banner"></div>
    <div class="content">
      <p class="chance" v-if="startStatus">您有<strong> 1 </strong>次抽奖机会</p>
      <p class="nochance" v-else>您已参与过抽奖，详情请查看中奖记录</p>
      <rotate-item :isStart='isStart' :isStarted='isStarted'/>
      <div class="btn">
        <btn-comp :text='text[0]' @click.native="rulesClick"/>
        <btn-comp :text='text[1]' @click.native="recordsClick"/>
      </div>
    </div>
    <div class="showTips" v-show="showTips">
      <tips :tipsText='tipsText' :tipsPic='tipsPic'/>
    </div>
    <div class="showrules" v-show="rulesStatus">
      <Rules :changVal='changVal' :type='type'/>
    </div>
    <div class="showCoupon" v-show="couponStatus">
      <coupon :showCoupon='showCoupon' :prize='prize'/>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import Vuex,{ mapMutations, mapState } from 'vuex'
import RotateItem from '../components/rotating/rotateItem'
import BtnComp from '../components/rotating/btnComp'
import Tips from '../components/tips'
import Rules from '../components/showRules'
import Coupon from '../components/rotating/coupon'
export default {
  components: { RotateItem, BtnComp, Tips, Rules, Coupon },
  data() {
    return {
      text: ['活动规则', '中奖记录'],
      tipsText: '暂无中奖记录',
      startStatus: true,
      tipsPic: false,
      showTips: false,
      rulesStatus: false,
      couponStatus: false,
      type: 'rotate',
      prize: ''
    }
  },
  computed: {
    ...mapState({
      typeCoupon: state => state.rotate.typeCoupon
    })
  },
  watch: {
    typeCoupon() {
      setTimeout(() => {
        this.prize = this.typeCoupon
        this.couponStatus = true
      }, 2200);
    }
  },
  methods: {
    //中奖记录
    recordsClick() {
      if(this.startStatus) {
        this.showTips = true
        setTimeout(() => {
          this.showTips = false
        }, 2000);
      }else {
        this.couponStatus = true
      }
    },
    //展示规则
    rulesClick() {
      this.rulesStatus = true
    },
    //关闭规则
    changVal(val) {
      this.rulesStatus = val
    },
    //开始抽奖
    isStart(val) {
      this.startStatus = val
    },
    //已抽奖
    isStarted(val) {
      this.showTips = val
      this.tipsText = '抽奖机会已用完'
      setTimeout(() => {
        this.showTips = false
      }, 2000);
    },
    //中奖券
    showCoupon(val) {
      this.couponStatus = val
    }
  }
}
</script>

<style lang="scss" scoped>
.rotating {
  position: relative;
  width: 100vw;
  min-height: 100vh;
  background-color: rgba(6, 23, 41, 1);
  .banner {
    background: url(../assets/images/rotate-banner.png) no-repeat center;
    background-size: 100% 100%;
    width: 100%;
    height: 50vw;
  }
  .content {
    width: 100%;
    text-align: center;
    .chance {
      color: #fff;
      font-weight: bold;
      font-size: 4.8vw;
      strong {
        color: rgba(137, 227, 250, 1);
        font-size: 6.4vw;
      }
    }
    .nochance {
      font-size: 3.73vw;
      color: #fff;
      line-height: 10vw;
    }
  }
  .btn {
    width: 80%;
    margin: 0 auto;
    position: relative;
    z-index: 99;
    display: flex;
    justify-content: space-around;
    margin-top: 10vw;
  }
  .footer {
    background: url(../assets/images/footer.png) no-repeat center;
    background-color: rgba(6, 23, 41, 1);
    background-size: 100% 100%;
    width: 100%;
    height: 83.33vw;
    position: absolute;
    bottom: -13.33vw;
    left: 0;
    pointer-events:none;
  }
  .showTips {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.5);
    z-index: 999;
  }
  .showrules {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.5);
    z-index: 999;
  }
  .showCoupon {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.5);
    z-index: 999;
  }
}
</style>
