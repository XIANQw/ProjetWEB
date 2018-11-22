$(function(){
 var accelerations = [];
 var orientaions=[];
 var time_acc=[];
 var time_ori=[];
 var startTime;

 function orientaionsLisener(eventData){
   var g = Math.round(eventData.gamma);
   var b = Math.round(eventData.beta);
   var a = Math.round(eventData.alpha);
   orientaions.push(Math.round(Math.sqrt(g*g+b*b+a*a)));
   time_ori.push(new Date().getTime()-startTime);
   $("#G").html(g);
   $("#B").html(b);
   $("#A").html(a);
 }

 function accelerationLisener(events){
   var acc = events.accelerationIncludingGravity;
   var x = Math.round(acc.x);
   var y = Math.round(acc.y);
   var z = Math.round(acc.z);
   $("#X").html(x);
   $("#Y").html(y);
   $("#Z").html(z);
   accelerations.push(Math.round(Math.sqrt(x*x+y*y+z*z)));
   time_acc.push(new Date().getTime()-startTime);
 }

 $("#start").click(function(){
   startTime = new Date().getTime();
   window.addEventListener("deviceorientation",orientaionsLisener);
   window.addEventListener("devicemotion",accelerationLisener);
 })


 $("#stop").click(function(){
   window.removeEventListener("deviceorientation",orientaionsLisener);
   window.removeEventListener("devicemotion",accelerationLisener);
   var donnes = [accelerations,orientaions,time_acc,time_ori];
   ecrireJson(donnes);
   donnes = [];
  })

  function ecrireJson(d){
    var kw = $('#keyword').val();
    var name = $("#nameOfUser").text();
    $.ajax({
         url:'./service/save.php',
         type:'post',
         data:{
           "date":startTime,
           "name":name,
           "keyword":kw,
           "data":d
         },
         success:function(data){
           var str = kw+", save successful";
           $("#result").html(str);
         },
         error:function(data){
           console.log(data);
             var str = "An error produce";
             $("#result").html(str);
         }
    });
  }
})
