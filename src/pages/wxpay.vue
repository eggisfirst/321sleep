<template>
  <div class="wxpay">
    This page is wxpay.
    <button @click="wxpay">pay</button>
    <br/><br/>
    <button @click="test">alert</button>
    <br/>
    <button @click="getWxpayData">get data</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  // components: { InputComp, Tips, RadioComp, SelectCity },
  data() {
    return {
      
    }
  },
  mounted() {
    let date = new Date()
    let timestamp = date.getTime()
    console.log(this.getNonceStr(22), '时间戳：', timestamp, '5bd19d3a610caf93c01dc05462a42408'.toUpperCase())
    // this.get_client_ip()
  },
  methods: {
    test() {
      alert(typeof WeixinJSBridge)
    },
    wxpay() {
      if (typeof WeixinJSBridge == 'undefined'){
        if( document.addEventListener ){
            document.addEventListener('WeixinJSBridgeReady', this.onBridgeReady, false);
        }else if (document.attachEvent){
            document.attachEvent('WeixinJSBridgeReady', this.onBridgeReady); 
            document.attachEvent('onWeixinJSBridgeReady', this.onBridgeReady);
        }
      }else{
        this.onBridgeReady();
      }
    },
    onBridgeReady() {
      WeixinJSBridge.invoke(
        'getBrandWCPayRequest', {
          "appId": "wx877a7e37b0de0a87",     //公众号名称，由商户传入     
          "timeStamp": Date.parse(new Date())/1000,         //时间戳，自1970年以来的秒数     
          "nonceStr":"e61463f8efa94090b1f366cccfbbb444", //随机串     
          "package":"prepay_id=u802345jgfjsdfgsdg888",     
          "signType":"MD5",         //微信签名方式：     
          "paySign":"70EA570631E4BB79628FBCA90534C63FF7FADD89" //微信签名 
        },
        function(res){
          if(res.err_msg == "get_brand_wcpay_request:ok" ){
          // 使用以上方式判断前端返回,微信团队郑重提示：
                //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
          } 
        }
      )
    },
    getNonceStr(n) {
      var chars =['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
      var res = "";
      for(var i = 0; i < n ; i ++) {
          var id = Math.ceil(Math.random()*n)
          res += chars[id]
      }
      return res
    },
    getWxpayData() {
      axios({
        method: 'post',
        url: 'https://api.mch.weixin.qq.com/pay/unifiedorder',
        params: {
          appid: 'wx877a7e37b0de0a87', // 公众账号ID
          mch_id: '1311989501', // 商户号
          // nonce_str: this.getNonceStr(32), // 随机字符串
          nonce_str: 'wtli3g4hwhu7tdftvc3q6b79i1jflhwe',
          sign: '	5BD19D3A610CAF93C01DC05462A42408', // 签名
          body: '慕思芯逸蚕丝薄被', // 商品描述
          out_trade_no: '2019022509050043kdc1469f6416ih9m', // 商户订单号
          total_fee: 1, // 总金额
          spbill_create_ip: '223.104.63.246', // 终端iP
          notify_url: 'https://derucci.net/api/public/v1/getProvince', // 通知地址
          trade_type: 'MWEB', // 交易类型
          scene_info: `{"h5_info":{"type": "h5_info","wap_url": "https://derucci.net/web/321/#/wxpay","wap_name": "321世界睡眠日"}}`
        }
      }).then((res) => {
        alert('successa')
      }).catch((error) => {
        alert('errorsa')
      })
    }

    // get_client_ip() {
    //   axios({
    //     method: 'get',
    //     url: 'http://pv.sohu.com/cityjson?ie=utf-8'
    //   }).then((res) => {
    //     console.log('获取用户IP成功', res)
    //   }).catch((error) => {

    //   })
    // }

//             method: 'post',
//         url: 'https://api.mch.weixin.qq.com/pay/unifiedorder',
//         params: {
//           appid: 'wx877a7e37b0de0a87', // 公众账号ID
//           body: '慕思芯逸蚕丝薄被', // 商品描述
//           mch_id: '1311989501', // 商户号
//           nonce_str: this.getNonceStr(32), // 随机字符串
//           notify_url: 'https://derucci.net/api/public/v1/getProvince', // 通知地址
//           out_trade_no: '2019022509050043kdc1469f6416ih9m', // 商户订单号
//           scene_info: `{"h5_info":{"type": "h5_info","wap_url": "https://derucci.net/web/321/#/wxpay","wap_name": "321世界睡眠日"}}`
//           sign: , // 签名
//           spbill_create_ip: '223.104.63.246', // 终端iP
//           total_fee: 1, // 总金
//           trade_type: 'MWEB', // 交易类型
// stringA: appid=wx877a7e37b0de0a87&body=慕思芯逸蚕丝薄被&mch_id=1311989501&nonce_str=wtli3g4hwhu7tdftvc3q6b79i1jflhwe&notify_url=https://derucci.net/api/public/v1/getProvince&out_trade_no=2019022509050043kdc1469f6416ih9m&scene_info={"h5_info":{"type": "h5_info","wap_url": "https://derucci.net/web/321/#/wxpay","wap_name": "321世界睡眠日"}}&spbill_create_ip=223.104.63.246&total_fee=1&trade_type=MWEB
// stringSignTemp=stringA+"&key=192006250b4c09247ec02edce69f6a2d"
// appid=wx877a7e37b0de0a87&body=慕思芯逸蚕丝薄被&mch_id=1311989501&nonce_str=wtli3g4hwhu7tdftvc3q6b79i1jflhwe&notify_url=https://derucci.net/api/public/v1/getProvince&out_trade_no=2019022509050043kdc1469f6416ih9m&scene_info={"h5_info":{"type": "h5_info","wap_url": "https://derucci.net/web/321/#/wxpay","wap_name": "321世界睡眠日"}}&spbill_create_ip=223.104.63.246&total_fee=1&trade_type=MWEB&key=dawma9c9taqsftgk3vfhbm4ul5m8sbk6
  }
}
</script>

<style lang="scss" scoped>
.wxpay {
  
}
</style>
