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
    />
  </div>
</template>

<script>
export default {
  props: ["placeholderText", "myType", "value", "maxLength"],
  data() {
    return {};
  },
  methods: {
    fixScroll() {
      window.scroll(0, 0);
    }
  }
};
</script>

<style lang="scss" scoped>
.inputComp {
  .input {
    border: 0; // 去除未选中状态边框
    outline: none; // 去除选中状态边框
    background-color: rgba(0, 0, 0, 0); // 透明背景
  }
}
.input::-webkit-input-placeholder {
  // color: #f7fbfd;
}
</style>
