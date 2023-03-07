<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="utf-8" />
    <title>keyboard input</title>
</head>
<body>
<canvas id="canvas" width="400" height="400"></canvas>
<script src="https://code.jquery.com/jquery-2.1.0.js"></script>
<script>
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;
    var circle = function (x,y,radius,fillCircle) {
    ctx.beginPath();
    ctx.arc(x,y,radius,0,Math.PI*2,false);
    if (fillCircle) {
    ctx.fill();
} else {
    ctx.stroke();
}
};
    var Ball = function (){
    this.x = width/2;
    this.y = height/2;
    this.xSpeed = 5;
    this.ySpeed = 0;
};
    ball.prototype.move = function () {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    if (this.x<0) {
    this.x=width;
} else if (this.x>width) {
    this.x = 0;
}
    if (this.y<0) {
    this.y = height;
} else if (this.y > height) {
    this.y = 0;
}
};
    var keyNames = {
    32: "space",
    37: "left",
    38:"up",
    39:"right",
    40:"down",
    16: "shift",
    13:"return",
    18:"option"
};
    $("body").keydown(function (event) {
    console.log(keyNames[event.keyCode]);
});


</script>
</body>
</html>