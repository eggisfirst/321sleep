<template>
  <div class="index">
    <div class="banner"></div>
    <div class="content">
      <div class="title">
        <p>拼团客户录入</p>
        <img src="../assets/images/line.png" alt="">
      </div>
      <div class="from_data">
        <p>{{ Title }}</p>
        <ul>
          <li class="selectCity">
            <span>{{ textVal }}</span>
            <div class="pullDown" @click="getCity"></div>
          </li>
          <li v-for="(item, index) in text" :key='index'>
            <input-comp 
              v-model="list[index]" 
              :placeholderText='item.name'
              :maxLength='item.maxLength'
              :myType='item.type'/>
          </li>
          <li class="raidoCom">
            <radio-comp v-model='radioVal'/>
          </li>
        </ul>
        <button class="btn" @click="submitData"></button>
      </div>
    </div>
    <div class="footer"></div>
    <div class="showTips" v-show="isShowTips">
      <tips :tipsText='tipsText' :tipsPic='tipsPic'/>
    </div>
  </div>
</template>

<script>
import sha1 from '../utils/sha1'
import axios from 'axios' 
import Common from '../utils/common'
import {testPhone} from '../utils/common'
import {isNull} from '../utils/common'

import InputComp from '../components/inputComp';
import RadioComp from '../components/radioComp';
import Tips from '../components/tips';
// import index from '../store';
import {IndexModel} from '../utils/index'
const indexModel = new IndexModel()
export default {
  components: { InputComp, Tips, RadioComp },
  data() {
    return {
      text: [
        {name: '请输入门店名称', type: 'text', maxLength:'20'},
        {name: '请输入经销商姓名', type: 'text', maxLength:'20'},
        {name: '请输入客户姓名', type: 'text', maxLength:'20'},
        {name: '请输入客户手机', type: 'number', maxLength:'11'}
      ],
      Title:'',
      title: [
        '请录入已到店支付预款2000元的客户，与客户核实后录入，避免录入错误。',
        '请录入参与抽奖和秒杀活动的客户信息。',
        '请录入参与秒杀活动的客户信息。'
      ],
      list:[],
      radioVal:'',
      textVal:'请选择城市',
      tipsText: '录入成功',
      isShowTips: false,
      tipsPic: true
    }
  },
  watch: {
    radioVal() {
      this.getTitle(this.radioVal)
    }
  },
  methods: {
    submitData() {
      this.testPhoneVal()
    },
    //验证手机号码
    testPhoneVal() {
      let phone = this.list[3]
      if(testPhone(phone)) {
        this.isShowTips = true
        this.testInputData()
      }else {
        this.showWarnTips('请输入正确手机号')
      }
    },
    //判断哪个输入框没填
    testInputData() {
      let len = this.list.length
      for(var i = 0; i < len; i++) {
        if(this.list[i] == undefined || isNull(this.list[i]) == false) {
          this.checkInputData(i)
          return 
        }else {
          if(this.radioVal == ''){
            this.showWarnTips('请选择订单类型')
          }else {
            this.showTips('录入成功')
          }
        }
      }
    },
    //输入框没填写的错误提示
    showWarnTips(text) {
      this.isShowTips = true
      this.tipsPic = false
      this.tipsText = text
      setTimeout(() => {
        this.isShowTips = false
      }, 1500);
    },
    //成功提示
    showTips(text) {
      this.isShowTips = true
      this.tipsPic = true
      this.tipsText = text
      setTimeout(() => {
        this.isShowTips = false
        // this.list = []
      }, 1000);
    },
    //判断是哪个输入框没填
    checkInputData(i) {
      if(i == 0) {
        this.showWarnTips('请输入门店名称')
        return
      }else if(i == 1) {
        this.showWarnTips('请输入经销商姓名')
        return
      }else if(i == 2) {
        this.showWarnTips('请输入客户姓名')
        return
      }
    },
    //判断单选框显示title
    getTitle(val) {
      if(val === '拼团') {
        this.Title = this.title[0]
      }else if(val == '满20000元') {
        this.Title = this.title[1]
      }else if(val == '1000元定金') {
        this.Title = this.title[2]
      }
    },
    getCity() {}
  
  }
}
</script>

<style lang="scss" scoped>
.index {
  width: 100vw;
  min-height: 100vh;
  background-color: rgba(6, 23, 41, 1);
  .banner {
    background: url(../assets/images/banner.png) no-repeat center;
    background-size: 100% 100%;
    width: 100%;
    height: 50vw;
  }
  .content {
    width: 90.66vw;
    margin: 0 auto;
    .title {
      margin-top: 2.8vw;
      text-align: center;
      p {
        font-size: 4.8vw;
        font-weight:bold;
        color: rgba(255, 255, 255, 1);
        line-height:6.4vw;
        text-shadow:0 0.4vw 0.3vw rgba(26,39,76,0.58);
        -webkit-text-stroke:1px undefined;
        text-stroke:1px undefined;
        background:linear-gradient(0deg,rgba(101,177,255,1) 0%, rgba(236,245,254,1) 34.5703125%, rgba(101,177,255,1) 67.8955078125%, rgba(239,245,252,1) 100%);
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
      }
      img {
        width: 36.26vw;
        height: auto;
      }
    }
    .from_data {
      z-index: 999;
      position: relative;
      padding: 4.26vw 5.3vw;
      height:90vw;
      background:rgba(17,63,111,0.5);
      border-radius:3.2vw;
      p {
        font-size: 3.73vw;
        color:rgba(142,221,255,1);
        line-height: 6.4vw;
      }
      .selectCity {
        display: flex;
        align-items: center;
        font-size:4.26vw;
        line-height: 13.3vw;
        border-bottom: 1px solid #19589a;
        width: 100%;
        background:none;  
        outline:none;  
        color:  #68b9fe;
        justify-content: space-between
      }
      .raidoCom {
        padding-right:6vw; 
      }
      .pullDown {
        background: url(../assets/images/pulldown.png) no-repeat center;
        background-size: 100% 100%;
        width: 2.8vw;
        height: 2.8vw;
      }
      .btn {
        background: url(../assets/images/btn.png) no-repeat center;
        background-size: 100% 100%;
        width: 46.93vw;
        height: 15.86vw;
        position: absolute;
        bottom: -20.86vw;
        left: 23.47vw;
      }
    }
  }
  .footer {
    background: url(../assets/images/footer.png) no-repeat center;
    background-size: 100% 100%;
    width: 100%;
    height: 83.33vw;
    margin-top: -31vw;
    // position: fixed;
    // bottom: 0;
    // left: 0;
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
}
</style>

