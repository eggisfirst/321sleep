<!--  -->
<template>
  <div class="newSell">
    <div class="logo"></div>
    <div class="banner"></div>
    <!-- <div class="line" :style="{marginTop: marginTop}"></div> -->
    <div class="from_data" :style="{marginTop: marginTop}">
      <p class="signup"></p>
      <ul>
        <li v-for="(item, index) in text" :key="index" class="input-li">
          <p class="input_left">{{item.left_text}}&nbsp;&nbsp;&nbsp;|</p>
          <inputCmp
            class="input"
            v-model.trim="list[index]"
            :myType="item.type"
            :placeholderText="item.name"
            :maxLength="item.maxLength"
          />
        </li>
      </ul>
      <div class="btn" @click="handleSignUp">立即预约</div>
      <p class="promise"></p>
      <p class="limit"></p>
      <p class="phoneu"></p>
    </div>

    <div class="showTips" v-show="isShowTips">
      <tips :tipsText="tipsText" :tipsPic="tipsPic" />
    </div>
  </div>
</template>

<script>
import inputCmp from "../components/newIInputCmp";
import { testPhone, isNull, testUrl, GetQueryString } from "../utils/common";
import Tips from "../components/tips";
import { IndexModel } from "../utils/index";
const indexModel = new IndexModel();
export default {
  components: { inputCmp, Tips },
  data() {
    return {
      text: [
        {
          name: "请输入您的姓名",
          type: "text",
          maxLength: "20",
          left_text: "姓名"
        },
        {
          name: "请输入您的电话",
          type: "number",
          maxLength: "11",
          left_text: "电话"
        }
      ],
      marginTop: "26.38vh",
      list: [],
      isShowTips: false,
      tipsText: "",
      tipsPic: false
    };
  },
  created() {
    this.judgeHeight();
  },
  methods: {
    /**判断线的位置。如果>800则调整位置 */
    judgeHeight() {
      let phone = this.phoneSize();
      this.marginTop = phone === 800 ? "26.38vh" : "33.39vh";
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
          // if (this.text[i].left_text === "姓名") {
          //   let passName = await this.recycleName(this.list[i]);
          //   if (!passName) {
          //     this.showTips("请输入正确姓名", false);
          //     return;
          //   }
          // }
          // else 
          if (this.text[i].left_text === "电话") {
            if (!testPhone(this.list[i])) {
              this.showTips("请输入正确号码", false);
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
      let strLen = str.length;
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
        realName: this.list[0],
        phone: this.list[1],
        url: this.getParams(),
        province: "广东省",
        city: "深圳"
      };
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
  width: 100%;
  height: 100%;
  // left: 0;
  // top: 0;
  // position: fixed;
  background: url("../assets/images/newSell/bg.png") no-repeat center;
  background-size: cover;
  overflow: scroll;
  padding-bottom: 20vw;
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
      width: 73.6vw;
      height: 8.66vw;
      background: url("../assets/images/newSell/input.png") no-repeat center;
      background-size: 100% 100%;
      margin-bottom: 2vw;
      display: flex;
      align-items: center;
      // justify-content: center;
      .input_left {
        font-size: 3.73vw;
        color: #202020;
        line-height: 8.66vw;
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
      width: 74.53vw;
      height: 8vw;
      background: url("../assets/images/newSell/btn.png") no-repeat center;
      background-size: 100% 100%;
      margin-bottom: 2vw;
      text-align: center;
      line-height: 8vw;
      font-size: 3.2vw;
      color: #202020;
      font-weight: 500;
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