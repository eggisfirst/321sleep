<!--  -->
<template>
  <div class="newSellAd">
    <div class="shadow"></div>
    <div class="logo"></div>
    <div class="banner"></div>
    <div class="sleep"></div>
    <div class="title"></div>
    <div class="light"></div>
    <div class="action"></div>
    <p class="text">
      现招募
      <span class="red">99</span>名睡眠体验官预约到店体验
    </p>
    <p class="text">
      还可享受价值
      <span class="red">899</span>元私人订制睡眠解决方案
    </p>
    <p class="text">名额有限，领完为止！</p>

    <newSellInput class="newSellInput" :handleSubmit1="handleSubmit1" :showTips="showTips" />

    <p class="text">*我们承诺信息将被严格保密</p>

    <div class="attention">
      <div class="left_line"></div>
      <div class="center"></div>
      <div class="right_line"></div>
    </div>

    <div class="ad1">
      <div class="warn"></div>
    </div>

    <div class="ad2"></div>
    <p class="description">没有释放的压力，正在反噬你的生活</p>

    <div class="module" v-for="(item, index) in moduleArr" :key="index">
      <p class="description">{{item.description}}</p>
      <div class="light"></div>
      <div class="ad" :style="{backgroundImage:`url(${item.ad})`,width: `${item.desWidth}` } "></div>
      <div class="photo" :style="{backgroundImage:`url(${item.photo})` } "></div>
    </div>

    <p class="textBig">睡得好很有必要</p>
    <p class="textBig">击破压力刻不容缓</p>
    <p class="textBig">击垮我们的不是压力本身</p>
    <p class="textBig">而是应对它的方式</p>

    <div class="line"></div>

    <div class="footer">
      <div class="signUp"></div>
      <p class="description">释放压力 / 告别焦虑 / 轻松入眠</p>
      <newSellInput class="newSellInput" :handleSubmit1="handleSubmit1" :showTips="showTips" />
      <p class="text" :style="{marginTop: '5.6vw'}">*我们承诺信息将被严格保密</p>
      <div class="limit"></div>
      <div class="phone"></div>
    </div>

    <div class="showTips" v-show="isShowTips">
      <tips :tipsText="tipsText" :tipsPic="tipsPic" />
    </div>
  </div>
</template>

<script>
import newSellInput from "../components/newSellInput";
import Tips from "../components/tips";
import { GetQueryString, testUrl } from "../utils/common";
import { IndexModel } from "../utils/index";
const indexModel = new IndexModel();
export default {
  components: { newSellInput, Tips },
  data() {
    return {
      moduleArr: [
        {
          description: "记忆力下降 / 注意力不集中 / 工作效率低",
          ad: "./static/img/newSellAd/text4.png",
          photo: "./static/img/newSellAd/ad2.jpg",
          desWidth: "74.6vw"
        },
        {
          description: "脾气暴躁  /  情绪失控  /  家庭关系恶化",
          ad: "./static/img/newSellAd/text5.png",
          photo: "./static/img/newSellAd/ad3.jpg",
          desWidth: "81.6vw"
        },
        {
          description: "脱发  /  早衰  /  免疫力下降",
          ad: "./static/img/newSellAd/text6.png",
          photo: "./static/img/newSellAd/ad4.jpg",
          desWidth: "74.93vw"
        }
      ],
      tipsText: "",
      tipsPic: "",
      isShowTips: false
    };
  },
  methods: {
    /**预约 */
    handleSubmit1(val) {
      this.handleRequest(val);
    },
    /**发送请求 */
    handleRequest(list) {
      let obj = {
        realName: list[0],
        phone: list[1],
        url: this.getParams(),
        province: "广东省",
        city: "深圳"
      };
      indexModel.activitySignUp(obj).then(res => {
        if (res.data.status) {
          this.showTips({text: "预约成功", status: true});
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        } else {
          this.showTips({text: res.data.msg, status: false});
        }
      });
    },
    /**获取url参数 */
    getParams() {
      const url = testUrl(window.location.href);
      //参数activityId固定
      return GetQueryString("activityId", url);
    },
    /**弹出提示框 */
    showTips(val) {
      this.isShowTips = true;
      this.tipsText = val.text;
      this.tipsPic = val.status;
      setTimeout(() => {
        this.isShowTips = false;
      }, 1500);
    }
  }
};
</script>
<style lang='scss' scoped>
.newSellAd {
  background: url("../assets/images/newSellAd/bg.jpeg") no-repeat center;
  background-size: 100% 100%;
  padding-top: 14.6vw;
  position: relative;
  padding-bottom: 20vw;
  .shadow {
    background: url("../assets/images/newSellAd/shadow.png") no-repeat center;
    background-size: 100% 100%;
    position: absolute;
    top: 3.2vw;
    left: 0;
    width: 100vw;
    height: 77.06vw;
  }
  .logo {
    width: 43.6vw;
    height: 28.93vw;
    margin: 0 auto;
    // margin-top: 3.2vw;
    margin-bottom: 1.46vw;
    background: url("../assets/images/newSellAd/logo.png") no-repeat center;
    background-size: 100% 100%;
  }
  .banner {
    width: 82.44vw;
    height: 53.2vw;
    background: url("../assets/images/newSellAd/banner.png") no-repeat center;
    background-size: 100% 100%;
    margin: 0 auto;
    margin-top: 9.6vw;
  }
  .sleep {
    width: 100vw;
    height: 103.86vw;
    background: url("../assets/images/newSellAd/sleep.png") no-repeat center;
    background-size: cover;
    margin-top: -6.6vw;
  }
  .title {
    width: 68.8vw;
    height: 6.93vw;
    background: url("../assets/images/newSellAd/text2.png") no-repeat center;
    background-size: 100% 100%;
    margin: 0 auto;
  }
  .light {
    width: 41.33vw;
    height: 11.86vw;
    background: url("../assets/images/newSellAd/light.png") no-repeat center;
    background-size: 100% 100%;
    margin: 0 auto;
  }
  .action {
    width: 41.33vw;
    height: 6.93vw;
    background: url("../assets/images/newSellAd/action.png") no-repeat center;
    background-size: 100% 100%;
    margin: 0 auto;
    margin-top: -6.93vw;
    margin-bottom: 7.73vw;
  }

  .text {
    font-size: 2.8vw;
    color: #fff;
    text-align: center;
  }
  .red {
    font-size: 4.2vw;
    color: #ff0000;
  }

  .newSellInput {
    margin-top: 8.13vw;
  }

  .attention {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 13.33vw;
    .left_line {
      width: 18.13vw;
      height: 0.4vw;
      background: url("../assets/images/newSellAd/left_line.png") no-repeat
        center;
      background-size: 100% 100%;
    }
    .center {
      width: 50.66vw;
      height: 6.8vw;
      background: url("../assets/images/newSellAd/text1.png") no-repeat center;
      background-size: 100% 100%;
      margin-left: 1.86vw;
      margin-right: 1.86vw;
    }
    .right_line {
      width: 18.13vw;
      height: 0.4vw;
      background: url("../assets/images/newSellAd/right_line.png") no-repeat
        center;
      background-size: 100% 100%;
    }
  }

  .ad1 {
    width: 67.2vw;
    height: 44.8vw;
    background: url("../assets/images/newSellAd/ad1.jpg") no-repeat center;
    background-size: 100% 100%;
    margin: 0 auto;
    margin-top: 5.73vw;
    position: relative;
    .warn {
      width: 14vw;
      height: 14vw;
      background: url("../assets/images/newSellAd/warn.png") no-repeat center;
      background-size: 100% 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -7vw;
      margin-top: -7vw;
    }
  }

  .ad2 {
    width: 67.1vw;
    height: 6.8vw;
    background: url("../assets/images/newSellAd/text3.png") no-repeat center;
    background-size: 100% 100%;
    margin: 0 auto;
    margin-top: 6.6vw;
    margin-bottom: 3.06vw;
  }
  .description {
    font-size: 2.8vw;
    color: #fff;
    text-align: center;
    line-height: 4.2vw;
  }

  .module {
    width: 100vw;
    margin-top: 11.73vw;
    margin-bottom: 11.6vw;
    .ad {
      width: 74.6vw;
      height: 6.8vw;
      // background: url("../assets/images/newSellAd/text4.png") no-repeat center;
      background-size: 100% 100%;
      margin: 0 auto;
      margin-top: -6.93vw;
    }
    .photo {
      width: 52.8vw;
      height: 52.8vw;
      border-radius: 50%;

      // background: url("../assets/images/newSellAd/ad2.png") no-repeat center;
      background-size: 100% 100%;
      margin: 0 auto;
      margin-top: 4.4vw;
    }
  }

  .textBig {
    font-size: 4.2vw;
    color: #fff;
    text-align: center;
  }

  .line {
    width: 86.26vw;
    height: 0.4vw;
    background: url("../assets/images/newSellAd/line.png") no-repeat center;
    background-size: 100% 100%;
    margin: 0 auto;
    margin-top: 10.5vw;
  }

  .footer {
    .signUp {
      width: 68vw;
      height: 3.73vw;
      background: url("../assets/images/newSellAd/signUp.png") no-repeat center;
      background-size: 100% 100%;
      margin: 0 auto;
      margin-top: 9.33vw;
      margin-bottom: 4.53vw;
    }
    .limit {
      width: 27.2vw;
      height: 2.93vw;
      background: url("../assets/images/newSellAd/limit.png") no-repeat center;
      background-size: 100% 100%;
      margin: 0 auto;
      margin-top: 11.73vw;
      margin-bottom: 4.53vw;
    }
    .phone {
      width: 69.06vw;
      height: 2.53vw;
      background: url("../assets/images/newSellAd/phone.png") no-repeat center;
      background-size: 100% 100%;
      margin: 0 auto;
      margin-top: 2.8vw;
      margin-bottom: 21vw;
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

  .from_data {
    position: relative;
    .input-li {
      margin: 0 auto;
      width: 73.6vw;
      height: 8.66vw;
      background: url("../assets/images/newSellAd/input.png") no-repeat center;
      background-size: 100% 100%;
      margin-bottom: 2vw;
      display: flex;
      align-items: center;
      // justify-content: center;
      .input_left {
        font-size: 2.8vw;
        color: #202020;
        line-height: 8.66vw;
        padding-left: 5.86vw;
        // font-weight: 500;
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
      background: url("../assets/images/newSellAd/btn.png") no-repeat center;
      background-size: 100% 100%;
      margin-bottom: 2vw;
      text-align: center;
      line-height: 8vw;
      font-size: 3.2vw;
      color: #202020;
      font-weight: 500;
    }
  }
}
</style>