<template>
    <div class="tab">
      <router-link :to="{path:item.link,query:{page:index}}" @click.native="changeBtn(index)"  v-for="(item,index) in link" :key="index" :class="{'router-link-exact-active':i==index}">
          <img :src='item.imgUrl' alt="">
          <span>{{item.name}}</span>
      </router-link> 
     
    </div>  
</template>

<script>

export default {
  name:'Tab',
  props:['link'],
  data () {
    return {
      i:0
    }
  },
  created(){
    var i=this.$route.query.page;
    if(i=='undefined'||i==''||i==null){
      this.i=0;
    }else{
      this.i=i;
    }
    
    
  },
  methods:{
   changeBtn(i){
    this.i=i;
   }
  }
}
</script>

<style lang="scss" scoped>
.tab{
  width:46.4vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:space-between;
  margin:.4rem auto 0;
  a{
    display: flex;
    width:.3rem;
    height:.3rem;
    align-items: center;
    justify-content: center;
    background:rgba(46,130,201,.4);
    border-radius:50%;
    transition: width .2s linear;
    overflow: hidden;
    img{
      width:.13rem;
      height:.13rem;
      display: block;
    }
    span{
      font-size: 0;
      color:#fff; 
    }
  }
  .router-link-exact-active{
    width:.84rem;
    background: #2E82C9;
    
    border-radius:.15rem;
    img{
      display: none;
    }
    span{
      font-size: .15rem;
    }
  }
  
}

</style>
