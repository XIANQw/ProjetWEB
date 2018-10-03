
window.addEventListener("load", function(ev) {
  var res = $(".res");

  window.addEventListener("devicemotion", function(ev) {
    res[0].textContent = "x: "+ Math.round(ev.accelerationIncludingGravity.x);
    res[1].textContent = "y: " + Math.round(ev.accelerationIncludingGravity.y);
    res[2].textContent= "z: " + Math.round(ev.accelerationIncludingGravity.z);
  });

})
