function drawData(Elem,Data){
  var context = Elem.getContext('2d');
  const WIDTH = Elem.width;
  const HEIGHT = Elem.height;
  var padding = 20;
  var paddingLeft = 60;
  var paddingBottom = 30;



// Cordonnées de l'axe Y

  var axisY = {
       x : paddingLeft,
       y : padding
   };


   var origin = {
       x : paddingLeft,
       y : HEIGHT - paddingBottom
   };

// Cordonnées de l'axe X
   var axisX = {
       x : WIDTH - padding,
       y : HEIGHT - paddingBottom
   };

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
   //var time_length = Data[7].length;
   var unitex = abs(axisX.x - origin.x)/4;
   var unitey = abs(axisY.y - origin.y)/4;

   for(var i=0;i<=4;i++){
     context.fillText(i+"sec",time.x,time.y);
     time.x += unitex;
   }

   var orientation = {
     x : paddingLeft-30,
     y : HEIGHT - paddingBottom,
   }
   for(var i=-2;i<=2;i++){
     context.fillText(i,orientation.x,orientation.y);
     orientation.y += unitey;
   }
   //tracer le chart
   var time_length = Data[7].length;

     var PointX = Data[7][0]/10 + origin.x;
     var PointY = Data[6][0]/1 + origin.y;
   for (var i = 0; i<time_length; i++){
     var Point2X = (Data[7][i]/10) * unitex + origin.x;
     var Point2Y = (Data[6][i]/1) *unitey + origin.y;

     if(Point2Y < 0){
       Point2Y = 0-Point2Y;
     }
     else{
       Point2Y = 2 * unitey + Point2Y;
     }

     drawLine(context,PointX,PointY,Point2X,Point2Y);

     PointX = Point2X;
     PointY = Point2Y;

   }

}

function drawLine(ctx,x, y, X, Y){
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(X, Y);
  ctx.stroke();
  ctx.closePath();
}
