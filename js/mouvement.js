var oriValuesX = []; //存放x轴数据
var oriValuesY = []; //存放y轴数据
var oriValuesZ = []; //存放z轴数据
var oriValuesSqrt = []; //存放xyz平方相加再开根的数据
var timeX = []; //存放图表x轴的时间，单位：毫秒
var x = y = z = 0; //用以获取xyz轴当前的数据
var startTime = new Date().getTime(); //最初的开始时间，单位：毫秒
var string = ''; //定义一个字符串用来显示数据

window.addEventListener("load", function(eventData) {

  var res = $(".res");

  window.addEventListener("devicemotion", function(eventData) {
    /*res[0].textContent = "x: "+ Math.round(ev.accelerationIncludingGravity.x);
    res[1].textContent = "y: " + Math.round(ev.accelerationIncludingGravity.y);
    res[2].textContent= "z: " + Math.round(ev.accelerationIncludingGravity.z);*/
    var currTime = new Date().getTime(); //当前时间
    var diffTime = currTime - startTime;//当前时间减最初时间，得到当前时间差
    timeX.push(diffTime); //将当前时间差存放
    var acceleration =eventData.accelerationIncludingGravity; //获得加速器对象
    x = acceleration.x; //获取x轴当前加速度
    y =acceleration.y; //获取y轴当前加速度
    z =acceleration.z; //获取z轴当前加速度
    oriValuesX.push(x); //将x轴当前加速度存放
    oriValuesY.push(y); //将y轴当前加速度存放
    oriValuesZ.push(z); //将z轴当前加速度存放
    oriValuesSqrt.push(Math.round(Math.sqrt(x * x + y * y + z *z))); //将当前xyz加速度平方相加再开根存放
    if(timeX.length == 200){ //控制个数
        //line();//调用line函数，生成图表用的
        for(var i= 0 ; i < oriValuesSqrt.length ; i++){
           string = string +(timeX[i]+":"+ oriValuesSqrt[i]+ "\n"); //'当前时间：数据' 的形式显示在前台，方便查看数据
        }
       res[0].textContent = string;

    }
  });

})
