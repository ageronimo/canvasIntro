// draws a line 
var c = document.getElementById("rectangle");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();

//draws a circle
var c = document.getElementById("circle");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();

//draws text
var c = document.getElementById("text");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Hello World",10,50);

//draws stroke text
var c = document.getElementById("stroke_text");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.strokeText("Hello World",10,50);

//linear gradient
var c = document.getElementById("gradient1");
var ctx = c.getContext("2d");
// Create gradient
var grd = ctx.createLinearGradient(0,0,200,0);
grd.addColorStop(0,"purple");
grd.addColorStop(1,"blue");
// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10,10,150,80);

//circle gradient
var c = document.getElementById("gradient2");
var ctx = c.getContext("2d");
// Create gradient
var grd = ctx.createRadialGradient(75,50,5,90,60,100);
grd.addColorStop(0,"aqua");
grd.addColorStop(1,"salmon");
// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10,10,150,80);

//draws img
function myCanvas() {
    var c = document.getElementById("picHere");
    var ctx = c.getContext("2d");
    var img = document.getElementById("scream");
    ctx.drawImage(img,10,10);
}