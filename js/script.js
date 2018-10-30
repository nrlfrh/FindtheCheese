var canvas = document.querySelector(".board");
var ctx = canvas.getContext("2d");

var maze = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 1, 0],
  [0, 1, 1, 0, 0, 0, 1, 0, 1, 0],
  [0, 0, 1, 1, 1, 1, 1, 0, 1, 0],
  [1, 0, 1, 0, 0, 0, 1, 0, 1, 0],
  [1, 0, 1, 0, 1, 0, 1, 0, 0, 0],
  [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
  [-1, 0, 1, 0, 1, 1, 0, 0, 0, 0]
];

var mouseImg = new Image();
mouseImg.src = "./images/mouse.png";
var cheeseImg = new Image();
cheeseImg.src = "./images/cheese.png";

var mouse = {
  x: 0,
  y: 0,
  width: 50,
  height: 50,
  row: 0,
  column: 0,
  drawMe: function() {
    ctx.drawImage(mouseImg, this.x, this.y, this.width, this.height);
  },
  controlBoundaries: function() {
    if (this.x < 0) {
      this.x = 0;
    }
    if (this.y < 0) {
      this.y = 0;
    }

    if (this.x > 500 - this.width) {
      this.x = 500 - this.width;
    }

    if (this.y > 500 - this.height) {
      this.y = 500 - this.height;
    }
  }
};

var cheese = {
  x: 0,
  y: 450,
  width: 50,
  height: 50,
  row:0,
  column:10,
  drawMe: function() {
    ctx.drawImage(cheeseImg, this.x, this.y, this.width, this.height);
  }
};

var gameOver ={
    opacity:0,
    drawMe: function(){
        this.opacity += 0.01;

        ctx.globalAlpha = this.opacity;
        ctx.font = "bold 70px monospace";

        ctx.fillStyle = "yellow";
        ctx.fillText("Game Over", 311,325);

        ctx.lineWidth = 3;
        ctx.strkeStyle = "black";
        ctx.strokeText("Game Over", 311, 325);

        //reset globalAlpha so other drawings are normal(not transparent)
        ctx.globalAlpha =1;
    }
}

function mazeMe() {
  for (x = 0; x < maze.length; x++) {
    for (y = 0; y < maze[x].length; y++) {
      if (maze[y][x] === 1) {
        ctx.fillStyle = "black";
        ctx.fillRect(x * 50, y * 50, 50, 50);
      } else if (maze[y][x] === -1) {
        cheese.drawMe();
      }
    }
  }
}

function drawEverything() {
  ctx.clearRect(0, 0, 500, 500);
  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;
  ctx.strokeRect(0, 0, 500, 500);

  mouse.drawMe();
  mazeMe();

  requestAnimationFrame(function() {
    drawEverything();
  });
}

drawEverything();

document.onkeydown = function(event) {
  event.preventDefault();
  switch (event.keyCode) {
    case 37: //left arrow
    if (mouse.column-1 >= 0 && maze[mouse.row][mouse.column-1] !== 1 ){
        mouse.x -= 50;
        mouse.column -= 1;
    }
      break;
    case 38: //up arrow
    if (mouse.row-1 >= 0 && maze[mouse.row-1][mouse.column] !== 1 ){
        mouse.y -= 50;
        mouse.row -= 1;
    }
      break;

    case 39: //right arrow
    if (mouse.column+1 < 10 && maze[mouse.row][mouse.column+1] !== 1 ){
        mouse.x += 50;
        mouse.column += 1;
    }
      break;

    case 40: //down arrow
    if (mouse.row +1 < 10 && maze[mouse.row+1][mouse.column] !==1 ){
        mouse.y += 50;
        mouse.row += 1;
    }
      break;
  }

  mouse.controlBoundaries();
};
