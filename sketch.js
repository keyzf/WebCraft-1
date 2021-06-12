var cubes = [];
var chunks = [];
var player,
  playerTouching = false,
  chunkWidth = 20,
  chunkLength = 20,
  fallSpeed = 20,
  jumpFrame = 1,
  terminalVel = 300,
  toggledFly = false;
renderdist = 2;
var playerCanFly = false;
var gameState = "loading";

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background("black");
  normalMaterial();
  if (gameState === "loading") {
    for (var i = 0; i < renderdist; i++) {
      chunks[i] = [];
      for (var j = 0; j < renderdist; j++) {
        chunks[i].push(new Chunk(i, j));
      }
    }
    player = createRoverCam();
    player.usePointerLock();
    player.setState({ speed: 3 });
    player.position.y =
      cubes[round(chunkWidth / 2)][round(chunkLength / 2)].h - 100;
    player.position.x =
      cubes[round(chunkLength / 2)][round(chunkLength / 2)].pos.x;
    player.position.z =
      cubes[round(chunkLength / 2)][round(chunkLength / 2)].pos.z;
    gameState = "playing";
  } else if (gameState === "playing") {
    for (var i in chunks) {
      for (var j in chunks[i]) {
        chunks[i][j].render();
        chunks[i][j].update();
      }
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
