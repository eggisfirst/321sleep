<!--  -->
<template>
  <div class="newSell">
    <!-- <div class="logo"></div>
    <div class="banner"></div>-->
    <!-- <div class="line" :style="{marginTop: marginTop}"></div> -->
    <div class="from_data" :style="{marginTop: marginTop}">
      <!-- <p class="signup"></p> -->
      <ul>
        <li v-for="(item, index) in text" :key="index" class="input-li">
          <!-- <p class="input_left">{{item.left_text}}&nbsp;&nbsp;&nbsp;|</p> -->
          <inputCmp
            class="input"
            v-model.trim="list[index]"
            :myType="item.type"
            :placeholderText="item.left_text"
            :maxLength="item.maxLength"
          />
        </li>
      </ul>
      <div class="btn" @click="handleSignUp">点击报名 预约检测</div>
    </div>

    <div class="showTips" v-show="isShowTips">
      <tips :tipsText="tipsText" :tipsPic="tipsPic" />
    </div>
  </div>
</template>

<script>
import inputCmp from "../components/newInput2";
import { testPhone, isNull, testUrl, GetQueryString } from "../utils/common";
import Tips from "../components/tips";
import { IndexModel } from "../utils/index";
const indexModel = new IndexModel();

import { getQueryString } from '../utils/rotate'
export default {
  components: { inputCmp, Tips },
  data() {
    return {
      text: [
        {
          name: "请输入手机号码",
          type: "number",
          maxLength: "11",
          left_text: "手机号码"
        },
        {
          name: "请输入姓名",
          type: "text",
          maxLength: "20",
          left_text: "姓名"
        }
      ],
      marginTop: "26.38vh",
      list: [],
      isShowTips: false,
      tipsText: "",
      tipsPic: false,
      userData: {}
    };
  },
  created() {
    this.judgeHeight();
    this.getCode()
  },
  methods: {
     getCode() {
      let url = location.href
      //重定向
      if(url.indexOf('code') == -1){
        location.href = 'https://derucci.net/service/get-weixin-code.html?appid=wx877a7e37b0de0a87&scope=snsapi_base&state=parsm&redirect_uri='+url; 
      }
      let code = getQueryString('code')
      console.log('code',code)
      this.getUnionId(code)
    },
    //获取unionId/头像/昵称
    getUnionId(code) {
      indexModel.getUnionId(code).then(res => {
        if(res.code == 0) {
          if(res.unionid) {
            this.userData = res
          } 
        }else{
          alert('已过期，请重新登录')
        }
      })
    },
    /**判断线的位置。如果>800则调整位置 */
    judgeHeight() {
      let phone = this.phoneSize();
      this.marginTop = phone === 800 ? "65.5vh" : "65.5vh";
    },
    /**ios点击按钮后回弹页面 */
    fixScroll() {
      let u = navigator.userAgent;
      let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
      if (isIOS) {
        window.scroll(0, 0);
      }
    },
    /**点击预约 */
    async handleSignUp() {
      this.fixScroll();
      const textLen = this.text.length;
      let valLen = 0;
      for (var i = 0; i < textLen; i++) {
        if (!this.list[i] || isNull(this.list[i]) == false) {
          this.showTips(this.text[i].name, false);
          return false;
        } else {
          if (this.text[i].left_text === "姓名") {
            let testName = /^[\u4e00-\u9fa5]{2,}$/;
            if (!testName.test(this.list[i])) {
              this.showTips("只能输入中文且不能少于2个字", false);
              return;
            }

            // let passName = await this.recycleName(this.list[i]);
            // if (!passName) {
            //   this.showTips("姓氏不存在", false);
            //   return;
            // }
          } else if (this.text[i].left_text === "手机号码") {
            if (!testPhone(this.list[i])) {
              this.showTips("请输入正确手机号码", false);
              return false;
            }
          }
          valLen += 1;
        }
      }
      if (valLen === textLen) {
        this.handleRequest();
      }
    },
    /**循环验证姓氏 */
    async recycleName(str) {
      let lastName;
      let strLen = str.length - 1;
      let isExist;
      for (let i = 0; i < strLen; i++) {
        lastName = str.slice(0, i + 1);
        isExist = await this.checkName(lastName);
        if (isExist) {
          break;
        }
      }
      return isExist;
    },
    /**检查姓氏 */
    async checkName(name) {
      let isExist;
      await indexModel.checkLastName(name).then(res => {
        if (res.data.data) {
          isExist = true;
        } else {
          isExist = false;
        }
      });
      return isExist;
    },
    /**发送请求 */
    handleRequest() {
      let obj = {
        realName: this.list[1],
        phone: this.list[0],
        url: this.getParams(),
        u_province: "广东省",
        u_city: "深圳",
        ...this.userData
      };
      console.log('obj',obj)
      indexModel.activitySignUp(obj).then(res => {
        if (res.data.status) {
          this.showTips("预约成功", true);
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        } else {
          this.showTips(res.data.msg, false);
        }
      });
    },
    /**获取url参数 */
    getParams() {
      const url = testUrl(window.location.href);
      //参数activityId固定
      return GetQueryString("activityId", url);
    },
    /**提示的显示隐藏以及内容 */
    showTips(val, status) {
      this.isShowTips = true;
      this.tipsText = val;
      this.tipsPic = status;
      setTimeout(() => {
        this.isShowTips = false;
      }, 1500);
    }
  }
};
</script>
<style lang='scss' scoped>
.newSell {
  width: 100vw;
  height: 100vh;
  // left: 0;
  // top: 0;
  // position: fixed;
  background: url("../assets/images/newSell/newbg.png") no-repeat center;
  background-size: 100% 100%;
  overflow: scroll;
  padding-bottom: 2vw;
  // z-index: -1;
  .logo {
    width: 19.46vw;
    height: 12.93vw;
    margin: 0 auto;
    margin-top: 3.2vw;
    margin-bottom: 1.46vw;
    background: url("../assets/images/newSell/logo.png") no-repeat center;
    background-size: 100% 100%;
  }
  .banner {
    width: 67.33vw;
    height: 44vw;
    background: url("../assets/images/newSell/banner.png") no-repeat center;
    background-size: 100% 100%;
    margin: 0 auto;
  }
  .line {
    width: 86.26vw;
    height: 0.266vw;
    background: url("../assets/images/newSell/line.png") no-repeat center;
    background-size: 100% 100%;
    margin: 0 auto;
    margin-top: 26.38vh;
  }

  .from_data {
    position: relative;
    margin-top: 26.38vh;
    .signup {
      width: 76.4vw;
      height: 4.13vw;
      margin: 0 auto;
      background: url("../assets/images/newSell/signup.png") no-repeat center;
      background-size: 100% 100%;
      margin-top: 1.86vw;
      margin-bottom: 2.93vw;
    }
    .promise {
      width: 49.46vw;
      height: 5.33vw;
      margin: 0 auto;
      background: url("../assets/images/newSell/promise.png") no-repeat center;
      background-size: 100% 100%;
    }
    .limit {
      margin: 0 auto;
      width: 42.8vw;
      height: 5.86vw;
      background: url("../assets/images/newSell/limit.png") no-repeat center;
      background-size: 100% 100%;
    }
    .phoneu {
      margin: 0 auto;
      width: 91.33vw;
      height: 4.66vw;
      background: url("../assets/images/newSell/phoneu.png") no-repeat center;
      background-size: 100% 100%;
    }

    .input-li {
      margin: 0 auto;
      width: 87.2vw;
      height: 12.26vw;
      background-color: #f3f3f3;
      // background: url("../assets/images/newSell/input.png") no-repeat center;
      background-size: 100% 100%;
      margin-bottom: 2vw;
      display: flex;
      align-items: center;
      // justify-content: center;
      .input_left {
        font-size: 3.73vw;
        color: #202020;
        line-height: 12.26vw;
        padding-left: 5.86vw;
        font-weight: 500;
      }
      .input {
        padding-left: 9.46vw;
        width: 42vw;
        // border: 0; // 去除未选中状态边框
        // outline: none; // 去除选中状态边框
        // background-color: rgba(0, 0, 0, 0); // 透明背景
      }
    }
    .btn {
      margin: 0 auto;
      width: 87.2vw;
      height: 10.4vw;
      // background: url("../assets/images/newSell/btn.png") no-repeat center;
      // background-size: 100% 100%;
      margin-bottom: 2vw;
      text-align: center;
      line-height: 10.4vw;
      font-size: 4.6vw;
      color: #fff;
      // font-weight: 500;
      background-color: #2f8eec;
    }
  }
  .showTips {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
}
</style>