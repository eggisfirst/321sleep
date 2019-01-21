<template>
  <div class="inputComp">
    <input class="input"
      :type="myType"  
      :placeholder="placeholderText" 
      :value="value"
      :maxlength="maxLength"
      v-on:input="$emit('input', $event.target.value)"
      oninput="if(value.length>11)value=value.slice(0,11)">
  </div>
</template>

<script>
export default {
  props: ['placeholderText', 'myType', 'value', 'maxLength'],
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.inputComp {
  .input {
    font-size:4.26vw;
    line-height: 13.3vw;
    border-bottom: 1px solid #19589a;
    width: 100%;
    background:none;  
	  outline:none;  
    color:  #68b9fe
  }
}
.input::-webkit-input-placeholder{
  color: #68b9fe;
}
</style>
