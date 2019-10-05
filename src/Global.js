exports.install = (Vue, options) => {
  Vue.prototype.phoneSize =  () => {
    let u = navigator.userAgent;
    let phone;
    let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if(screen.height > 800) {
      return screen.height
    }else {
      return 800
    }
   };
};