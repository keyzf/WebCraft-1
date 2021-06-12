//backup file,will be removed soon.

var cubes = [];
var player,
  playerTouching = false,
  chunkWidth=60,
  chunkDepth=60;
fallSpeed = 20

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  for (i = 0; i < chunkWidth; i++) {
    cubes[i] = [];
    for (j = 0; j < chunkDepth; j++) {
      cubes[i].push(new block(i, j));
    }
  }
  player = createRoverCam();
  player.usePointerLock();
  player.setState({ speed: 5 });
  player.position.y = cubes[round(chunkWidth/2)][round(chunkDepth/2)].h-100
  player.position.x = cubes[round(chunkWidth/2)][round(chunkDepth/2)].pos.x
  player.position.z = cubes[round(chunkWidth/2)][round(chunkDepth/2)].pos.z
}

function draw() {
  background("black");
  normalMaterial();
  if (!playerTouching) {
    player.position.y += fallSpeed;
  } else if (playerTouching) {
    if (getPlayerTouchingGround()) {
      playerTouching = true;
      try {
        player.position.y =
          cubes[round(player.position.x / 10)][round(player.position.z / 10)]
            .h - 50;
      } catch (error) {
        playerTouching = false;
      }
    }
    else if(keyIsDown(32)){
      player.position.y -= 10
      playerTouching = false;
    }
    else{
      try {
        player.position.y =
          cubes[round(player.position.x / 10)][round(player.position.z / 10)]
            .h - 50;
      } catch (error) {
        playerTouching = false;
      }
    }
  }
  if (getPlayerTouchingGround()) {
    playerTouching = true;
    fallSpeed = 10
    try {
      player.position.y =
        cubes[round(player.position.x / 10)][round(player.position.z / 10)].h -
        50;
    } catch (error) {
      playerTouching = false;
    }
  }
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
