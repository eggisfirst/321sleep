function getAngle() {
  var num =  Math.floor(Math.random()*10+1)
  var amin,amax,text
  if( num == 1 || num == 2 || num == 3 || num == 4 ) {
    amin = 1
    amax = 90
    text = '199'
  }else if( num == 5 ||  num == 6 || num == 7) {
    amin = 271
    amax = 360
    text = '299'
  }else if (num == 8 || num == 9 ) {
    amin = 91
    amax = 180
    text = '399'
  }else if ( num == 10) {
    amin = 181
    amax = 270
    text = '499'
  }
  return [amin,amax,text]
}

export {getAngle}

function getRandom(min, max){
  var r = Math.random() * (max - min);
  var re = Math.round(r + min);
  re = Math.max(Math.min(re, max), min)
  // console.log(re)
  return re;
}

export { getRandom }