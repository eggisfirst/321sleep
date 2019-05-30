<template>
  <div class="inputComp">
    <input class="input"
      :type="myType"  
      :placeholder="placeholderText" 
      :value="value"
      :maxlength="maxLength"
      v-on:input="$emit('input', $event.target.value)"
      @blur="fixScroll"
      >
  </div>
</template>

<script>
export default {
  props: ['placeholderText', 'myType', 'value', 'maxLength'],
  data() {
    return {
    }
  },
  methods: {
    fixScroll() {
      window.scroll(0, 0)
    }
  }
}
</script>

<style lang="scss" scoped>
.inputComp {
  .input {
    font-size:4.26vw;
    height: 13.3vw;
    border-bottom: 1px solid #f7fbfd;
    width: 100%;
    background:none;  
	  outline:none;  
    color:  #f7fbfd
  }
}
.input::-webkit-input-placeholder{
  color: #f7fbfd;
}
</style>
