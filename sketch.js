var cubes = [];
var player,
  playerTouching = false,
  chunkWidth = 500,
  chunkLength = 500,
  fallSpeed = 20,
  jumpFrame = 1,
  terminalVel = 300,
  toggledFly = false;
var playerCanFly = false;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  for (i = 0; i < chunkWidth; i++) {
    cubes[i] = [];
    for (j = 0; j < chunkLength; j++) {
      cubes[i].push(new block(i, j));
    }
  }
  player = createRoverCam();
  player.usePointerLock();
  player.setState({ speed: 5 });
  player.position.y =
    cubes[round(chunkWidth / 2)][round(chunkLength / 2)].h - 100;
  player.position.x = cubes[round(chunkWidth / 2)][round(chunkLength / 2)].pos.x;
  player.position.z = cubes[round(chunkWidth / 2)][round(chunkLength / 2)].pos.z;
}

function draw() {
  background("black");
  normalMaterial();
  for (var i in cubes) {
    for (var j in cubes[i]) {
      cubes[i][j].render();
      cubes[i][j].playerInteract();
      cubes[i][j].update();
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function getPlayerTouchingGround() {
  try {
    return (
      cubes[round(player.position.x / 10)][round(player.position.z / 10)].h -
        20 <
      player.position.y + 20
    );
  } catch (error) {
    return false;
  }
}

function distanceTo(one, two) {
  var x1 = one[0];
  var x2 = two[0];
  var y1 = one[1];
  var y2 = two[1];
  var z1 = one[2];
  var z2 = two[2];

  return ((x2 - x1) ** 2 + (y2 - y1) ** 2 + (z2 - z1) ** 2) ** (1 / 2);
}
