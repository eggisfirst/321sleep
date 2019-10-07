<!--  -->
<template>
  <div class="from_data">
    <ul>
      <li v-for="(item, index) in text" :key="index" class="input-li">
        <p class="input_left">{{item.left_text}}&nbsp;&nbsp;&nbsp;|</p>
        <inputCmp
          class="input"
          v-model="list[index]"
          :myType="item.type"
          :placeholderText="item.name"
          :maxLength="item.maxLength"
          :fontSize="2.8"
        />
      </li>
    </ul>
    <div class="btn" @click="handleSubmit">立即预约</div>
  </div>
</template>

<script>
import inputCmp from "./newIInputCmp";
import { testPhone, isNull, testUrl, GetQueryString } from "../utils/common";

export default {
  components: { inputCmp },
  props: ["handleSubmit1", "showTips"],
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
      list: []
    };
  },
  methods: {
    /**提交按钮 */
    handleSubmit() {
      const textLen = this.text.length;
      let valLen = 0;
      for (var i = 0; i < textLen; i++) {
        if (!this.list[i] || isNull(this.list[i]) == false) {
          this.showTips({
            text: this.text[i].name,
            status: false
          });
          return false;
        } else {
          if (this.text[i].left_text === "电话") {
            if (!testPhone(this.list[i])) {
              this.showTips({
                text: "请输入正确号码",
                status: false
              });
              return false;
            }
          }
          valLen += 1;
        }
      }
      if (valLen === textLen) {
        this.handleSubmit1(this.list);
      }
    }
  }
};
</script>
<style lang='scss' scoped>
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
</style>