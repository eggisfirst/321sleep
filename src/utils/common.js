import axios from 'axios' 
export default class Common {
  // 参数加密
  getSign(arr) {
    let str = ''
    for (let i = 0; i < arr.length; i++) {
      str = str === '' ? `${arr[i][0]}=${arr[i][1]}` : `${str}&${arr[i][0]}=${arr[i][1]}`
    }
    console.log('加密参数：', str)
    return sha1.hex(str)
  }
  
  //获取token
  token() {
    return new Promise(function(resolve, reject) {
      axios({
        method: 'post',
        url: 'https://derucci.net/app/token.api',
        params: {
          key: '994061370314006529',
          secretKey:'477a1d7cc03d21d5abce55ec12170d3'
        }
      })
      .then((res) => {
        if (res) {
          resolve(res.data.token)
        }
      }).catch((error) => {
        if (error) {
          alert('token获取失败！')
        }
      })
    })
  }
 }


  // 校验手机格式
  let testPhone = (phone) =>  {
    const phoneReg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/
    return phoneReg.test(phone)
  }
  export {testPhone}
  //判断是否为空或者空格
  let isNull = (str) => {
    if (str.match(/^[ ]*$/)) { 
      return false
    }else {
      return true
    }
  }
  export {isNull}
//判断是2019/3/24号之前
let checkTime = () => {
  let beginTime = new Date('2019/06/08 00:00:00').getTime()
  let endTime = new Date('2019/06/23 18:00:00').getTime()
  let today = new Date().getTime()
  if( today >= beginTime && today < endTime ) {
    return 'begin'
  }else if(today < beginTime) {
    return 'before'
  }else {
    return false
  }
  // let year = new Date().getFullYear()
  // let mouth = new Date().getMonth() + 1
  // let day = new Date().getDate()
  // console.log(year,mouth,day,1111)
  // if(year == 2019 && mouth == 3 && day < 25) {
  //   return 'begin'
  // }else if(year == 2019 && mouth < 3){
  //   return 'before'
  // }else {
  //   return false
  // }
}
export {checkTime}

//返回每个时间段数字
let countNumber = () => {
  let year = new Date().getFullYear()
  let mouth = new Date().getMonth() + 1
  let day = new Date().getDate()
  let hour = new Date().getHours()
  // let num  
  console.log('time',day,hour)
  // if(year == 2019 && mouth == 3 && day < 25) {
  //   if(hour >= 0 && hour < 15) {
  //     num = 14*(day*3 - 2)
  //     return num
  //   }else if(hour >= 15 && hour < 21) {
  //     num = 14*(day*3 -1)
  //     return num
  //   }else if(hour >= 21) {
  //     num = 14*(day*3)
  //     return num
  //   }
  // }else {
  //   return false
  // }
  let num
  if(year == 2019 && mouth == 3 && day < 24) {
    if(hour >=0 && hour < 15) {
      num = 860 + [(day - 21)*3]* 18
      return num
    }else if(hour >=15 && hour < 21) {
      num = 860 + [(day - 21)*3 + 1]*18
      return num 
    }else if(hour >= 21) {
      num = 860 + [(day - 21)*3 + 2]*18
      return num 
    }
  }else if (year == 2019 && mouth == 3 && day == 24) {
    if(hour >=0 && hour < 15) {
      num = 1010
      return num 
    }else if(hour >=15 && hour < 21) {
      num = 1017
      return num 
    }else if(hour >= 21) {
      num = 1030
      return num 
    }
  }else {
    return false
  }

  
}

export{countNumber}

let phoneDisplay = (phone) => {
  let str2 = phone.substr(0,3)+"****"+ phone.substr(7);
  return str2
}
export {phoneDisplay}

let usernameDisplay = (name) => {
  return new Array(name.length).join('*') + name.substr(-1);
  // let newName = name.replace(/.(?=.)/g, '*');
  // return newName
}

export {usernameDisplay}

let nameDisplay = (name) => {
  let newStr;
  if (name.length === 2) {
  newStr = name.substr(0, 1) + '*';
  } else if (name.length > 2) {
    let char = '';
    for (let i = 0, len = name.length - 2; i < len; i++) {
      char += '*';
    }
    newStr = name.substr(0, 1) + char + name.substr(-1, 1);
  } else {
    newStr = name;
  }

  return newStr;
 }

 export {nameDisplay}


//检测url有没有#并去除#
const testUrl =  (name) => {
  if (name.indexOf("#") != -1) {
    name = name.substring(name.indexOf(""), name.indexOf('#/')) + name.substring(name.indexOf("#/") + 2)
    return name
  }
  return name
}

export {testUrl}

   //获取url参数
  const GetQueryString = (name, url) => {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    url = url.substr(url.indexOf('?') + 1)
    let r = url.match(reg);  //获取url中"?"符后的字符串并正则匹配
    let context = "";
    if (r != null)
      context = r[2];
    reg = null;
    r = null;
    return context == null || context == "" || context == "undefined" ? "" : context;
  }

  export {GetQueryString}