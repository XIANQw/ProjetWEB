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
   $("#start").click(function(){
     startTime = new Date().getTime();
     window.addEventListener("deviceorientation", function(eventData) {
       g = Math.round(eventData.gamma);
       b = Math.round(eventData.beta);
       a = Math.round(eventData.alpha);
       oriValuesG.push(g);
       oriValuesB.push(b);
       oriValuesA.push(a);
     });
     window.addEventListener("devicemotion",function(events){
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
   var currentTime = new Date().getTime();
   var diff = currentTime - startTime;
   var donnes = new Map();
   donnes.set('accX',accX);
   donnes.set('accY',accY);
   donnes.set('accZ',accZ);
   donnes.set('G',oriValuesG);
   donnes.set('B',oriValuesB);
   donnes.set('A',oriValuesA);
   donnes.set('time',diff);
   ecrireJson(donnes);
  })

  function ecrireJson(d){
    var kw = $('#keyword').val();
    var name = $("#nameOfUser").text();
    $.ajax({
         url:'./service/save.php',
         type:'post',
         data:{
           "name":name;
           "keyword":kw,
           "donnes":d
         },
         success:function(data){
           switch(data){
               var str = kw+", save successful";
               $("#result").html(str);
               break;
           }
         },
         error:function(data){
           console.log(data);
             var str = "Un error produce";
             $("#result").html(str);
         }
     });
  }
})
