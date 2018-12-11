var context;
//Défaut de Chart
var WIDTH;
var HEIGHT;
var padding = 20;
var paddingLeft = 60;
var paddingBottom = 30;
// Cordonnées de l'axe Y
var axisY;
// Cordonnées de point d'origine
var origin;
// Cordonnées de l'axe X
var axisX ;
//Unité de x et y
var unitex;
var unitey;
var time_length;

function draw(){
  var data = search();
  drawData($("#drawData")[0],data);
}

function InitData(Elem,Data){
  context = Elem.getContext('2d');
  WIDTH = Elem.width;
  HEIGHT = Elem.height;
  time_length = Data[7][Data[7].length-1]/1000 + 1;
  axisX = {
      x : WIDTH - padding,
      y : HEIGHT - paddingBottom
  };
  axisY = {
       x : paddingLeft,
       y : padding
   };
   origin = {
       x : paddingLeft,
       y : HEIGHT - paddingBottom
   };


   unitey = Math.abs(axisY.y - origin.y)/2;
   unitex = Math.abs(axisX.x - origin.x)/time_length;
   // tracer l'axe x,y
   context.lineWidth="1";
   context.strokeStyle="black";
   drawLine(context,axisY.x,axisY.y,origin.x,origin.y);
   drawLine(context,axisX.x,axisX.y,origin.x,origin.y);
   // tracer les fleches
   drawLine(context,axisY.x-5,axisY.y+10,axisY.x,axisY.y)
   drawLine(context,axisY.x+5,axisY.y+10,axisY.x,axisY.y)

   drawLine(context,axisX.x-10,axisX.y-5,axisX.x,axisX.y)
   drawLine(context,axisX.x-10,axisX.y+5,axisX.x,axisX.y)

   var time = {
   x : paddingLeft,
   y : HEIGHT - paddingBottom
   }

   context.textBaseline = "top";

   for(var i=0;i<=time_length;i++){
     context.fillText(i+"sec",time.x,time.y);
     time.x += unitex;
   }

   var orientation = {
     x : paddingLeft-30,
     y : HEIGHT - paddingBottom,
   }

   for(var i=-1;i<=1;i++){
      context.fillText(i,orientation.x,orientation.y);
      orientation.y -= unitey;
    }

    for(var i=4;i<7;i++){
      changeColor(context,i);
      drawOneData(context,i,7,Data);
    }
}

//tracer le chart
function drawOneData(context, indice,indiceTime,Data){
  var time_length = Data[indiceTime].length;
  var originOri = origin.y -  unitey;

  var PointX = origin.x + (Data[indiceTime][0]/1000) * unitex;
  var PointY =  originOri - (Data[indice][0]/180) * unitey;

  for (var i = 0; i<time_length; i++){
    var Point2X = origin.x + (Data[indiceTime][i]/1000) * unitex;
    var Point2Y = originOri - (Data[indice][i]/180) * unitey;
    drawLine(context,PointX,PointY,Point2X,Point2Y);
    PointX = Point2X;
    PointY = Point2Y;
  }
}

function changeColor(ctx,i){
  switch(i){
    case 4:ctx.strokeStyle = "#37ABEE";
    break;
    case 5:ctx.strokeStyle = "#EA7049";
    break;
    case 6:ctx.strokeStyle = "#0AFF24";
  }
}

function drawLine(ctx,x, y, X, Y){
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(X, Y);
  ctx.stroke();
  ctx.closePath();
}
