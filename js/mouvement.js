 var accX = [];
 var accY = [];
 var accZ = [];
 var oriG = [];
 var oriB = [];
 var oriA = [];
 var time_acc=[];
 var time_ori=[];
 var startTime;
 var time = 3;

 function orientaionsLisener(eventData){
   var g = Math.round(eventData.gamma);
   var b = Math.round(eventData.beta);
   var a = Math.round(eventData.alpha);
   oriG.push(g);
   oriB.push(b);
   oriA.push(a);
   time_ori.push(new Date().getTime()-startTime);
   $("#G").html(g);
   $("#B").html(b);
   $("#A").html(a);
 }

 function accelerationLisener(events){
   var acc = events.accelerationIncludingGravity;
   var x = Math.round(acc.x);
   var z = Math.round(acc.y);
   var y = Math.round(acc.z);
   accX.push(x);
   accY.push(y);
   accZ.push(z);
   $("#X").html(x);
   $("#Y").html(y);
   $("#Z").html(z);
   time_acc.push(new Date().getTime()-startTime);
 }

 function affiche(something){
   $("#result").html(something);
 }

 function go(){
   affiche(3);
   setTimeout("affiche(2)",1000);
   setTimeout("affiche(1)",2000);
   setTimeout("start()",3000);
 }

 function start(){
   affiche("Start !!!");
   $("#start").css('display','none');
   $("#stop").css('display','block');
   $("#res").css('display','block');
   window.addEventListener("deviceorientation",orientaionsLisener);
   window.addEventListener("devicemotion",accelerationLisener);
   startTime = new Date().getTime();
 }

 function stop(){
   $("#stop").css('display','none');
   $("#start").css('display','block');
   window.removeEventListener("deviceorientation",orientaionsLisener);
   window.removeEventListener("devicemotion",accelerationLisener);
   var donnes = [accX,accY,accZ,time_acc,oriA,oriB,oriG,time_ori];
   ecrireJson(donnes);
   drawData($("#drawData")[0],donnes);
   donnes = [];
 }

 function ecrireJson(d){
   var kw = $('#keyword').val();
   var name = $("#nameOfUser").text();
   $.ajax({
     url:'./service/save.php',
     type:'post',
     data:{
       "name":name,
       "keyword":kw,
       "data":d
     },
     success:function(data){
       var str = kw+", save successful";
       affiche(str);
     },
     error:function(data){
       console.log(data);
       affiche("An error produce");
     }
   });
 }

 

$(function(){
   $("#start").click(go);
   $("#stop").click(stop);
})
