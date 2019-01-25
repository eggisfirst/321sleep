<template>
    <div class="bar">
      <div class="bar_percent" :style="{width:width}"></div>
      <div class="list">
            <div class="list_item" v-for="(item,index) in listAttr" :key="index">           
                <p>{{item.date}}</p>
                <img src="../assets/images/in.png" alt="" v-if="item.on">
                <img src="../assets/images/out.png" alt="" v-else>
                <p>{{item.time}}</p>
            </div>
      </div>
    </div>
   
</template>

<script>

export default {
  name:'TimeBar',
  props:['list'],
  data () {
    return {
      listAttr:this.list,
      width:'12.5%'
    }
  },
  created(){
    
  },
  methods:{
   
  }
}
</script>

<style lang="scss" scoped>
.bar{
    width:100%;
    height:2px;
    background: #fff;
    position: relative;
    .bar_percent{
      width:37.5%;
      height:100%;
      position: absolute;
      top:0;
      left:0;
      background: #5FB0FF;
    }
    .list{
      position: absolute;
      top:0;
      left:0;
      transform: translate(0,-44%);
      width:100%;
      display: flex;
      flex-direction: row;
      align-items:center;
      justify-content: space-around;
      flex-wrap:nowrap;
      .list_item{
        text-align:center;
        p{
          font-size: .09rem;
          color:#fff;
        }
        img{
          width:.16rem;
          display: block;
          margin:0 auto;
        }
      }
}
    
    
  }

</style>
