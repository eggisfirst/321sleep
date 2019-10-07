<template>
  <div class="inputComp">
    <input
      id="input"
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
  props: ["placeholderText", "myType", "value", "maxLength", 'fontSize'],
  data() {
    return {};
  },
  methods: {
    fixScroll() {
      // window.scroll(0, 0);
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
    font-size: 3.73vw;
    line-height: 8.66vw;
    // font-weight: 500;
    height: 8.66vw;
  }
}
.input::-webkit-input-placeholder {
  color: #7e7e7e;
  line-height: 8.66vw;
}
</style>
