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
mouseImg.src = "./images/mouse.jpeg";
var cheeseImg = new Image();
cheeseImg.src = "./images/cheese.png";

var mouse = {
  x: 0,
  y: 0,
  width: 50,
  height: 50,
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
  drawMe: function() {
    ctx.drawImage(cheeseImg, this.x, this.y, this.width, this.height);
  }
};

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
  if (mouse.controlBoundaries()) {
    return;
  }

  switch (event.keyCode) {
    case 37: //left arrow
    //if (mouse.x === (maze[y][x].length === 0))
      mouse.x -= 50;
      break;
    case 38: //up arrow
    //if (mouse.x === (maze[y][x].length === 0))
      mouse.y -= 50;
      break;

    case 39: //right arrow
    //if (mouse.x === (maze[y][x].length === 0))
      mouse.x += 50;
      break;

    case 40: //down arrow
    //if (mouse.x === (maze[y][x].length === 0))
      mouse.y += 50;
      break;
  }
};

// function mazeBlock(mouseP, blackBox) {
//     return (
//       mouseP.y + mouseP.height >= blackBox.y &&
//       mouseP.y <= blackBox.y + blackBox.height &&
//       mouseP.x + mouseP.width >= blackBox.x &&
//       mouseP.x <= blackBox.x + blackBox.width
//     );
//   }