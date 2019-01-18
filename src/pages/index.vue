<template>
  <div class="index">
    <div class="banner"></div>
    <div class="content">
      <div class="title">
        <p>拼团客户录入</p>
        <img src="../assets/images/line.png" alt="">
      </div>
      <div class="from_data">
        <p>请录入已到店支付预款2000元的客户，与客户核实后录入，避免录入错误。</p>
        <ul>
          <li>请选择城市</li>
        </ul>
        <button class="btn"></button>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.index {
  width: 100vw;
  height: 100vh;
  background-color: rgba(6, 23, 41, 1);
  .banner {
    background: url(../assets/images/banner.png) no-repeat center;
    background-size: 100% 100%;
    width: 100%;
    height: 50vw;
  }
  .content {
    width: 90.66vw;
    margin: 0 auto;
    .title {
      margin-top: 2.8vw;
      text-align: center;
      p {
        font-size: 4.8vw;
        font-weight:bold;
        color: rgba(255, 255, 255, 1);
        line-height:6.4vw;
        text-shadow:0 0.4vw 0.3vw rgba(26,39,76,0.58);
        -webkit-text-stroke:1px undefined;
        text-stroke:1px undefined;
        background:linear-gradient(0deg,rgba(101,177,255,1) 0%, rgba(236,245,254,1) 34.5703125%, rgba(101,177,255,1) 67.8955078125%, rgba(239,245,252,1) 100%);
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
      }
      img {
        width: 36.26vw;
        height: auto;
      }
    }
    .from_data {
      z-index: 99;
      position: relative;
      padding: 4.26vw 5.3vw;
      // width:680px;
      height:90vw;
      background:rgba(17,63,111,0.5);
      border-radius:3.2vw;
      p {
        font-size: 3.73vw;
        // color: #fff;
        color:rgba(142,221,255,1);
        line-height: 6.4vw;
      }
      .btn {
        background: url(../assets/images/btn.png) no-repeat center;
        background-size: 100% 100%;
        width: 46.93vw;
        height: 15.86vw;
        position: absolute;
        bottom: -7.98vw;
        left: 23.47vw;
      }
    }
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

