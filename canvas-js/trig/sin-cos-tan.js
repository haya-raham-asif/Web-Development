var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;


// Y-axis
ctx.moveTo(canvas.width/2, 0);
ctx.lineTo(canvas.width/2, canvas.height);
ctx.stroke();

// X-axis
ctx.moveTo(0, canvas.height/2);
ctx.lineTo(canvas.width, canvas.height/2);
ctx.stroke();
canvas.strokeStyle = "rgb(0,0,0)"

console.log(canvas.height/2)
console.log(canvas.width/2)

// sin wave
var x = 0
ctx.moveTo(-1*canvas.width, -1*canvas.height)
while (x < canvas.width) {
    y = Math.sin(x);
    x =0
    y =0
    ctx.lineTo(x+410, y+720);
    ctx.stroke()
    x = x + 1;
}
