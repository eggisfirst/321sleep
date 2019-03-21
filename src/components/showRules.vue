<template>
  <div class="showRules">
    <div class="rules">
      <h1>活动规则</h1>
      <div v-if="showRule">
        <p>1.客户到店支付预付款2000元可参与拼团活动，全国拼团满1000人（含）则拼团成功，拼团客户可享拼团价23199元购MZZ1-013太空树脂球床垫；</p>
        <p>2.拼团人数满1000人后，客户可在3月31日24：00前，随时到门店支付拼团尾款21199元（即拼团价23199元-预付款的2000元）；</p>
        <p>3.3月31日24：00前，如仍未到门店支付尾款，则视为主动放弃拼团，预付款不退，但可作购买慕思其他产品抵扣金额；</p>
        <p>4.全国拼团未满1000人则拼团失败，预付款不退回，但可作为购买慕思其他产品抵扣金额；</p>
        <p>5.如果拼团成功，4月1号还将在参与拼团活动且已支付尾款的客户中，抽取1名免单名额（送太空树脂球床垫MZZ1-013一张）；</p>
        <p>6.如抽中的免单客户中途或活动结束后退款（含预付款），则免单名额作废；</p>
        <p>7.如有疑问请咨询客服热线：400-777-0077。</p>
      </div>
      <div v-else>
        <p>1.活动期间关注慕思寝具服务号（微信号：derucci02），即可参与现金大转盘抽奖，获得相应电子现金券，凭借电子现金券可以到门店兑换实体现金券和使用;</p>
        <p>2.现金券使用时间：3月1日-3月24日；</p>
        <p>3.现金券类型：199元现金券/299元现金券/399元现金券/499元现金券；</p>
        <p>4.消费满5千元方可使用现金券，不可叠加使用，单笔订单仅可使用一张；</p>
        <p>5.现金券可当现金抵扣购买慕思门店所有正价产品，不适应本次321活动款产品，不兑现，不找赎；</p>
        <p>6.详情请咨询：400 777 0077。</p>
      </div>
    </div>
    <div class="close" >
      <div class="close_btn" @click="closeBtn"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['changVal', 'type'],
  data() {
    return {
      showRule: true
    }
  },
  mounted() {
    if(this.type === 'rotate') {
      this.showRule = false
    } 
  },
  methods: {
    closeBtn() {
      this.changVal(false)
    }
  }
}
</script>

<style lang="scss" scoped>
.showRules {
  height: 100%;
  .rules {
    margin-left: 5vw;
    margin-top: 24vw;
    padding-bottom: 4.66vw;
    background: #fff;
    width: 90.66vw;
    background:rgba(239,239,244,1);
    box-shadow:0px 0.8vw 1.06vw 0px rgba(0, 0, 0, 0.2);
    border-radius:2.13vw;
    height: 60%;
    overflow: scroll;
    h1 {
      color: #333;
      font-size: 5.6vw;
      text-align: center;
      line-height: 14.33vw;
    }
    p {
      padding: 0 3.86vw;
      color: #363636;
      font-size: 3.73vw;
    }
  }
  .close {
    color: #fff;
    .close_btn {
      background: url(../assets/images/close.png) no-repeat center;
      background-size: 100% 100%;
      width: 10.66vw;
      height: 14.66vw;
      margin: -0.2vw auto;
    }
  }
}
</style>
