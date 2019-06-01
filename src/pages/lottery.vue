<template>
  <div class="index">
    <div class="banner"></div>
    <!-- <time-bar :list="list"/> -->
    <tab :list="link"/>
    <div class="footer"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import {IndexModel} from '../utils/index'
const indexModel = new IndexModel()
import TimeBar from "@/components/TimeBar"
import Tab from "@/components/Tab"
export default {
  name: 'draw',
  data () {
    return {
    }
  },
  computed:{
    ...mapState({
      list:state=>state.lottery.timeBar,
      link:state=>state.lottery.list
    })
  },
  components: {
    TimeBar,
    Tab,
  },
  created() {
    let date='2019-06-18';
    let type='618';
    indexModel.getPrizes(date,type).then(res=>{
      console.log(res.data);
      if(res.data.length==0){
        this.$store.commit('lottery/showNone');
      }else{
        this.$store.commit('lottery/setWinList',res.data);
      }
    })
  },
  methods: {
   
  }
}
</script>

<style lang="scss" scoped>
.index {
  width: 100vw;
  height: 100vh;
  position:relative;
  overflow-y:scroll;
  background-color: #BFEDFF;
  .banner {
    background: url(../assets/images/banner618_cj.png) no-repeat center;
    background-size: 100% 100%;
    width: 100%;
    height: 50.133vw;
  }
  /* .footer {
    background: url(../assets/images/footer.png) no-repeat center;
    background-size: 100% 100%;
    width: 100%;
    height: 83.33vw;
    position: fixed;
    bottom: 0;
    left: 0;
    pointer-events:none;
  } */
}

</style>

