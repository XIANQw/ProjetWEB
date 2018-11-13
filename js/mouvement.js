$(function(){
 var oriValuesG = [];
 var oriValuesB = [];
 var oriValuesA = [];
 var accX = [];
 var accY = [];
 var accZ = [];
 var g=b=a=x=y=z=0;
 var startTime = new Date().getTime();
 var stringA = "Alpha:";
 var stringB = "Beta:";
 var stringG = "Gamma:";
 var stringX = "X:";
 var stringY = "Y:";
 var stringZ = "Z:";
   $("#start").click(function(){
     window.addEventListener("deviceorientation", function(eventData) {
       g = Math.round(eventData.gamma);
       b = Math.round(eventData.beta);
       a = Math.round(eventData.alpha);
       oriValuesG.push(g);
       oriValuesB.push(b);
       oriValuesA.push(a);
     });
     window.addEventListener('devicemotion',function(event){
       var acc = event.accelerationIncludingGravity;
       x = Math.round(acc.x);
       y = Math.round(acc.y);
       z = Math.round(acc.z);
       accX.push(x);
       accY.push(y);
       accZ.push(z);
     });
 })
 $("#stop").click(function(){
     //line();
     for(var i= 0 ; i < oriValuesA.length ; i++){
        stringA = stringA +" "+oriValuesA[i];
        stringB = stringB +" "+oriValuesB[i];
        stringG = stringG +" "+oriValuesG[i];
        stringX = stringX +" "+accX[i];
        stringY = stringY +" "+accY[i];
        stringZ = stringZ +" "+accZ[i];
     }

    $("#X").html(stringX);
    $("#Y").html(stringY);
    $("#Z").html(stringZ);
    $("#A").html(stringA);
    $("#B").html(stringB);
    $("#G").html(stringG);
  })
})
