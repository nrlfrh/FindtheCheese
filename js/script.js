var canvas = document.querySelector(".maze");
var ctx = canvas.getContext("2d");

var mouseImg = new Image();
mouseImg.src = "./images/mouse.jpg";

var cheeseImg = new Image();
cheeseImg.src = "./images/cheese.png";

var mouse = {
    x: 0,
    y: 225,
    width: 50,
    height: 50,
    drawMe: function() {
      ctx.drawImage(mouseImg, this.x, this.y, this.width, this.height);
    }
};

var cheese = {
    x:100,
    y: 200,
    width: 50,
    height: 50,
    drawMe: function(){
        ctx.drawImage(cheeseImg, this.x, this.y, this.width, this.height);
    }
}

function drawEverything(){
    ctx.strokeStyle = "black"
    ctx.lineWidth = 4;
    ctx.strokeRect(0, 0, 1200, 550);

    mouse.drawMe();
    cheese.drawMe();
};

drawEverything();