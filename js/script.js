var canvas = document.querySelector(".board");
var ctx = canvas.getContext("2d");

// different kinds of maze
// 2 - mouse; 0 - path; 1 - wall; -1 - cheese
var maze1 = [
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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

var maze2 = [
  [1, 0, 0, 0, 2, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 1, 1, 0, 1, 1, 0, 1, 1, 1],
  [0, 0, 1, 0, 1, 1, 0, 1, 1, 1],
  [1, 0, 1, 1, 1, 0, 0, 0, 0, 1],
  [-1, 1, 1, 0, 0, 0, 1, 1, 0, 1],
  [0, 0, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 1, 1, 1]
];

var maze3 = [
  [1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
  [0, 0, 0, 1, 1, 1, 0, 1, 0, 1],
  [0, 1, 0, 0, 0, 0, 1, 0, 0, 1],
  [0, 1, 0, 1, 1, 1, 1, 1, 0, 1],
  [0, 1, 0, -1, 1, 2, 0, 0, 0, 1],
  [0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  [0, 0, 1, 0, 1, 1, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1, 0, 1, 1, 1],
  [1, 1, 1, 1, 0, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 0, 0, 0, 1, 1, 1]
];

var maze4 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 0, 0, 1, 1, 1, 0, 1, 1],
  [1, 1, 1, 0, 1, 1, 1, 0, 1, 0],
  [1, 2, 1, 0, 1, 1, 1, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [1, 0, 0, 1, 0, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 0, 1, 1, -1, 1, 1],
  [0, 0, 0, 1, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 1, 0, 1, 0, 1, 1],
  [1, 1, 1, 1, 1, 0, 0, 0, 1, 1]
];

var maze5 = [
  [2, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  [0, 1, 1, 0, 1, 0, 1, 1, 1, 1],
  [0, 1, 0, 0, 1, 0, 1, 0, 0, 0],
  [0, 1, 0, 1, 0, 0, 1, 0, 1, 1],
  [0, 1, 0, 1, 0, 1, 1, 0, 1, 1],
  [1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
  [0, 1, 1, 1, 0, 1, 0, 1, 1, 1],
  [-1, 1, 1, 1, 0, 0, 0, 1, 1, 1]
];

var maze6 = [
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, -1, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

var maze7 = [
  [2, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 1, 1, 0, 1, 1, 1, 1, 0, 1],
  [0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [0, 1, 1, 1, 1, 1, 0, 1, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [-1, 0, 0, 1, 1, 1, 1, 1, 1, 1]
];

// putting all the maze1-10 into an array
var allMaze = [];
allMaze.push(
  maze1,
  maze2,
  maze3,
  maze4,
  maze5,
  maze6,
  maze7,
);

// generating random maze all the time
var maze = [];
function randomMaze(allMaze) {
  var selectedMaze = allMaze[Math.floor(Math.random() * allMaze.length)];

console.log(selectedMaze)

  for (var x = 0; x < selectedMaze.length; x++) {
    for (var y = 0; y < selectedMaze[x].length; y++) {
      if (selectedMaze[y][x] === -1) {
        cheese.x = x * 50;
        cheese.y = y * 50;
      } else if (selectedMaze[y][x] === 2) {
        mouse.x = x * 50;
        mouse.y = y * 50;
        mouse.row = y;
        mouse.column = x;
      }
    }
  }

  return selectedMaze;
}

// creating mouse and cheese
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
  row: 0,
  column: 10,
  drawMe: function() {
    ctx.drawImage(cheeseImg, this.x, this.y, this.width, this.height);
  }
};

var replay = document.querySelector(".replay");
replay.style.visibility = "hidden";

// gameover
var gameOver = {
  opacity: 0,
  drawMe: function() {
    this.opacity += 0.01;

    ctx.globalAlpha = this.opacity;
    ctx.font = "bold 40px monospace";

    ctx.fillStyle = "yellow";
    ctx.fillText("You found the Cheese", 10, 250);

    ctx.lineWidth = 3;
    ctx.strkeStyle = "black";
    ctx.strokeText("You found the Cheese", 10, 250);

    //reset globalAlpha so other drawings are normal(not transparent)
    ctx.globalAlpha = 1;

    replay.style.visibility = "visible";
        return;
  }
};

maze = randomMaze(allMaze);

replay.addEventListener("click", () => window.location.reload());

// drawing the maze in canvas
function mazeMe() {
  for (x = 0; x < maze.length; x++) {
    for (y = 0; y < maze[x].length; y++) {
      if (maze[y][x] === 1) {
        ctx.fillStyle = "black";
        ctx.fillRect(x * 50, y * 50, 50, 50);
      }
    }
  }
}

// putting everything in canvas
function drawEverything() {
  ctx.clearRect(0, 0, 500, 500);
  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;
  ctx.strokeRect(0, 0, 500, 500);

  cheese.drawMe();
  mouse.drawMe();
  mazeMe();

  if (collision(mouse, cheese)) {
    mouse.isCrashed = true;
    cheese.isCrashed = true;
  }

  if (mouse.isCrashed) {
    gameOver.drawMe();
  }

  requestAnimationFrame(function() {
    drawEverything();
  });
}

drawEverything();




// key down function
document.onkeydown = function(event) {
  switch (event.keyCode) {
    case 37: //left arrow
      event.preventDefault();
      if (mouse.column - 1 >= 0 && maze[mouse.row][mouse.column - 1] !== 1) {
        mouse.x -= 50;
        mouse.column -= 1;
      }
      break;
    case 38: //up arrow
      event.preventDefault();
      if (mouse.row - 1 >= 0 && maze[mouse.row - 1][mouse.column] !== 1) {
        mouse.y -= 50;
        mouse.row -= 1;
      }
      break;

    case 39: //right arrow
      event.preventDefault();
      if (mouse.column + 1 < 10 && maze[mouse.row][mouse.column + 1] !== 1) {
        mouse.x += 50;
        mouse.column += 1;
      }
      break;

    case 40: //down arrow
      event.preventDefault();
      if (mouse.row + 1 < 10 && maze[mouse.row + 1][mouse.column] !== 1) {
        mouse.y += 50;
        mouse.row += 1;
      }
      break;
  }

  mouse.controlBoundaries();
};


function collision(a, b) {
  return (
    a.y + a.height >= b.y &&
    a.y <= b.y + b.height &&
    a.x + a.width >= b.x &&
    a.x <= b.x + b.width
  );
}
