<template>
  <div class="radioComp">
    <input 
      type="radio" 
      name="radioComp"
      id="one" value="拼团" 
      v-on:input="$emit('input', $event.target.value)">
    <label for="one">
      <p class="one">拼团</p>
    </label>
    <input 
      type="radio" 
      name="radioComp"
      id="two" 
      value="满20000元" 
      v-on:input="$emit('input', $event.target.value)">
    <label for="two" class="center">
      <p class="two">满20000元</p>
    </label>
    <input 
      type="radio" 
      name="radioComp"
      id="three" 
      value="1000元定金" 
      v-on:input="$emit('input', $event.target.value)">
    <label for="three" class="right">
      <p class="three">1000元定金</p>
    </label>
  </div>
</template>

<script>
export default {
  props: ['value'],
  data() {
    return {
      picked: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.radioComp {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  position: relative;
  color: #fff;
  font-size: 3.73vw;
  margin-top: 5vw;
}
  .radioComp [type='radio'] {
    display: none
  }
  .radioComp label{
    display: inline-block;
    width: 4vw;
    height: 4vw;
    border: 1px #fff solid;
    border-radius: 100%;
    margin-right: 60px;
  }
  .radioComp .right{
    margin-left: 8vw;
  }
 .one{
   position: absolute;
   top: -1vw;
   left: 6vw;
 }
 .two{
   position: absolute;
   top: -1vw;
   left: 30vw;

 }
 .three{
   position: absolute;
   top: -1vw;
   right: -6vw;
 }
  .radioComp [type='radio']:checked {
    box-sizing: border-box;
     width: 4vw;
    height: 4vw;
  }
  .radioComp [type='radio']:checked + label {
    box-sizing: border-box;
    border: 1.2vw solid #fff;
    border-radius: 50%;
    width: 4.5vw;
    height: 4.5vw;
  }
// }
</style>
