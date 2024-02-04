var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;

//canvas.addEventListener("mousemove", function(evt) {
  //  displayCoor(canvas, evt);
//})

window.addEventListener('mousemove', function(evt){
    console.log("mouse moved")
    x = evt.clientX
    y = evt.clientY
});

window.addEventListener('keydown', function(e){
    console.log("key pressed")
    drawShape(canvas, e, x , y)
});

function drawShape(canvas, e, x, y) {
    if (e.keyCode === 84) {
        ctx.moveTo(x,y);
        ctx.lineTo(x, y+100);
        ctx.lineTo(x-100, y-50);
        ctx.lineTo(x,y)
        ctx.stroke();
    }

    if (e.keyCode === 67) {
        console.log(e.clientX)
        ctx.beginPath();
        ctx.arc(x, y, 50, 0, 2 * Math.PI);
        ctx.stroke();
    }

    if (e.keyCode === 69) {
        ctx.beginPath()
        ctx.rect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = "white"
        ctx.fill()
    }
}

function displayCoor(canvas, evt){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    var x = evt.clientX;
    var y = evt.clientY;
    var xString = x.toString()
    var yString = y.toString()
    let coor = "x: " + xString + " y: " + yString
    ctx.font = "30px Arial";
    ctx.fillText(coor, 670, 410);
}


