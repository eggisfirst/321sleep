<template>
  <div class="inputComp">
    <input
      class="input"
      :type="myType"
      :placeholder="placeholderText"
      :value="value"
      :maxlength="maxLength"
      v-on:input="$emit('input', $event.target.value)"
      @blur="fixScroll"
      :style="{fontSize: fontSize + 'vw'}"
    />
  </div>
</template>

<script>
export default {
  props: ["placeholderText", "myType", "value", "maxLength", "fontSize"],
  data() {
    return {
    };
  },
  methods: {
    /**ios回弹页面 */
    fixScroll() {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      let u = navigator.userAgent;
      let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
      if(isIOS) {
        //  this.$refs.input.scrollTop = 500
       window.scroll(0, top);
      }
    },
  }
};
</script>

<style lang="scss" scoped>
.inputComp {
  .input {
    border: 0; // 去除未选中状态边框
    outline: none; // 去除选中状态边框
    background-color: rgba(0, 0, 0, 0); // 透明背景
    font-size: 4.6vw;
    line-height: 12.26vw;
    // font-weight: 500;
    height: 12.26vw;
  }
}
.input::-webkit-input-placeholder {
  color: #d4d3d3;
  // line-height: 8.66vw;
}
</style>
