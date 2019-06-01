<template>
    <div class="box">
      <div class="lottery_table" v-if="list.draw">
       
          <div class="th">
            <div>姓名</div>
            <div>手机号</div>
          </div>
          <div class="td" v-for="(item,index) in list.winList" :key="index">
            <div>{{item.username.substring(0,1)+"*"+item.username.substring(2)}}</div>
            <div>{{item.phone.substring(0,3)+"****"+item.phone.substring(7)}}</div>
          </div>
      
       
      </div>
      <div class="miaosha_table" v-else-if="list.seckill">
        <div class="th">
          <div>姓名</div>
          <div>手机号</div>
        </div>
        <div class="td" v-for="(item,index) in list.winList" :key="index">
          <div>{{item.username.substring(0,1)+"*"+item.username.substring(2)}}</div>
          <div>{{item.phone.substring(0,3)+"****"+item.phone.substring(7)}}</div>
        </div>
       
      </div>
      <div class="nothing" v-else>
        <div class="th">
          <div>姓名</div>
          <div>手机号</div>
        </div>
        <h1>活动尚未开始</h1>
      </div>
    </div>  
</template>

<script>

export default {
  name:'list',
  props:['list'],
  data () {
    return {
    }
  },
  computed:{

  },
  created(){
    console.log(this.list)
  },
  mounted(){
   
  },
  methods:{
   
  }
}
</script>

<style lang="scss" scoped>
  .box{
    width:77.33vw;
    min-height: 128vw;
    margin:.16rem auto 0;
    font-size:.15rem;
    border-left: 4px solid #083258;
    border-right:4px solid #083258;
    border-radius: .15rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    overflow: hidden;
    background: #083258;
    .nothing{
      text-align: center;
      background: #083258;
      min-height: 128vw;
      display: flex;
      flex-direction:column;

      h1{
        font-size:.3rem;
        color:#083258;
        line-height:50vw;
        background: #95C8E1;
        flex:1;
      }
    }
    .lottery_table{
      width:100%;
      
    }
    .th{
      overflow:hidden;
      display:flex;
      flex-direction:row;
      align-items:center;
      justify-content: space-between;
      width:100%;
      height:9.333vw;
      color:#fff;
      padding-left:0.47rem;
      padding-right:0.6rem;
      box-sizing: border-box;
      :nth-child(1){
        flex:0 0 50%;
      }
      :nth-child(2){
        flex:0 0 50%;
      }
      
    }
    .td{
      display:flex;
      flex-direction:row;
      align-items:center;
      justify-content: space-between;
      width:100%;
      height:6.4vw;
      padding:0 .15rem;
      padding-left:0.47rem;
      padding-right:0.6rem;
      color:#083258;
      box-sizing: border-box;
      background: #95C8E1;
      :nth-child(1){
        flex:0 0 50%;
      }
      :nth-child(2){
        flex:0 0 50%;
        text-align: center;
      }
    }
    .td:nth-child(2n+1){
      background:#73A8C5;
      color:#fff; 
    }
    .miaosha_table{
      .th{
        :nth-child(1){
          flex:0 0 50%;
        }
        :nth-child(2){
          flex:0 0 50%;
          text-align: left;
        }
      }
      .td{
        :nth-child(1){
          flex:0 0 50%;
        }
        :nth-child(2){
          flex:0 0 50%;
          text-align: left;
        }
      }
    }
    
  }

</style>
