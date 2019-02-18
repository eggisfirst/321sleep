<template>
  <div class="rotating">
    <div class="banner"></div>
    <div class="content">
      <p class="chance" v-if="hasChance">您有<strong> 1 </strong>次抽奖机会</p>
      <p class="nochance" v-else>您已参与过抽奖，详情请查看中奖记录</p>
      <rotate-item/>
      <div class="btn">
        <btn-comp :text='text[0]'/>
        <btn-comp :text='text[1]'/>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import RotateItem from '../components/rotating/rotateItem'
import BtnComp from '../components/rotating/btnComp'
export default {
  components: { RotateItem, BtnComp },
  data() {
    return {
      text: ['活动规则', '中奖记录'],
      hasChance: true
    }
  }
}
</script>

<style lang="scss" scoped>
.rotating {
  position: relative;
  width: 100vw;
  min-height: 100vh;
  background-color: rgba(6, 23, 41, 1);
  .banner {
    background: url(../assets/images/rotate-banner.png) no-repeat center;
    background-size: 100% 100%;
    width: 100%;
    height: 50vw;
  }
  .content {
    width: 100%;
    text-align: center;
    .chance {
      color: #fff;
      font-weight: bold;
      font-size: 4.8vw;
      strong {
        color: rgba(137, 227, 250, 1);
        font-size: 6.4vw;
      }
    }
    .nochance {
      font-size: 3.73vw;
      color: #fff;
      line-height: 10vw;
    }
  }
  .btn {
    width: 80%;
    margin: 0 auto;
    position: relative;
    z-index: 99;
    display: flex;
    justify-content: space-around;
    margin-top: 10vw;
  }
  .footer {
    background: url(../assets/images/footer.png) no-repeat center;
    background-color: rgba(6, 23, 41, 1);
    background-size: 100% 100%;
    width: 100%;
    height: 83.33vw;
    position: absolute;
    bottom: -13.33vw;
    left: 0;
    pointer-events:none;
  }
}
</style>
