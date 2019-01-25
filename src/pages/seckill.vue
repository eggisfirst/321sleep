<template>
  <div class="index">
    <div class="banner"></div>
    <time-bar :list="list"/>
    <tab :link="link"/>
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TimeBar from "@/components/TimeBar"
import Tab from "@/components/Tab"
export default {
  name: 'seckill',
  data () {
    return {
      
    }
  },
  computed:{
    ...mapState({
      list:state=>state.seckill.seckill,
      link:state=>state.seckill.path
    })
  }
  ,
  components: {
    TimeBar,
    Tab,
  },
  created() {
   
  },
  methods: {
   
  }
}
</script>

<style lang="scss" scoped>
.index {
  width: 100vw;
  height: 100vh;
  overflow:scroll;
  background-color: rgba(6, 23, 41, 1);
  /* padding-bottom: .3rem; */
  .banner {
    background: url(../assets/images/banner_ms.png) no-repeat center;
    background-size: 100% 100%;
    width: 100%;
    height: 50vw;
  }
  
  .content{
    position: relative;
    z-index: 10;
  }
  
  .footer {
    background: url(../assets/images/footer.png) no-repeat center;
    background-size: 100% 100%;
    width: 100%;
    height: 83.33vw;
    position: fixed;
    bottom: 0;
    left: 0;
  }
}

</style>

