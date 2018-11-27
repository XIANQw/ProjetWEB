$(function(){
 var oriValuesG = [];
 var oriValuesB = [];
 var oriValuesA = [];
 var accX = [];
 var accY = [];
 var accZ = [];
 var g=b=a=x=y=z=0;
 var stringA = "Alpha:";
 var stringB = "Beta:";
 var stringG = "Gamma:";
 var stringX = "X:";
 var stringY = "Y:";
 var stringZ = "Z:";
 var startTime;
 var timeO =[];
 var timeM = [];
   $("#start").click(function(){
     startTime = new Date().getTime();
     window.addEventListener("deviceorientation", function(eventData) {
       var currentTimeO = new Date().getTime();
       var diffTimeO = currentTimeO - startTime;
       timeO.push(diffTimeO);
       g = Math.round(eventData.gamma);
       b = Math.round(eventData.beta);
       a = Math.round(eventData.alpha);
       oriValuesG.push(g);
       oriValuesB.push(b);
       oriValuesA.push(a);
     });
     window.addEventListener("devicemotion",function(events){
       var currentTimeM= new Date().getTime();
       var diffTimeM = currentTimeM - startTime;
       timeM.push(diffTimeM);
       var acc = events.accelerationIncludingGravity;
       x = Math.round(acc.x);
       y = Math.round(acc.y);
       z = Math.round(acc.z);
       accX.push(x);
       accY.push(y);
       accZ.push(z);
     });
 })
 $("#stop").click(function(){
   var donnes = [accX,accY,accZ];
 // donnes.set('G',oriValuesG);
 // donnes.set('B',oriValuesB);
 // donnes.set('A',oriValuesA);
 // donnes.set('timeM',timeM);
 // donnes.set('timeO',timeO);
   ecrireJson(donnes);
  })

  function ecrireJson(d){
    var kw = $('#keyword').val();
    var name = $("#nameOfUser").text();
    $.ajax({
         url:'./service/save.php',
         type:'post',
         data:{
           "name":name,
           "keyword":kw,
           "donnes":d,
         },
         success:function(data){
               var str = kw+", save successful";
               $("#result").html(str);
         },
         error:function(data){
           console.log(data);
             var str = "Un error produce";
             $("#result").html(str);
         }
     });
  }
})
