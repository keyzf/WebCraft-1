var cubes = [];
var player,
  playerTouching,
  chunkWidth,
  chunkLength,
  fallSpeed,
  jumpFrame,
  terminalVel,
  toggledFly;
var playerCanFly;
var gameState = "loading";

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  console.log('loading...')
}

function draw() {
  background("black");
  if (gameState === "loading") {
    cubes=[]
    playerTouching = false
    chunkWidth = 200
    chunkLength = 200
    fallSpeed = 20
    jumpFrame = 1
    terminalVel = 300
    toggledFly = false
    playerCanFly = false
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
    player.position.x =
      cubes[round(chunkLength / 2)][round(chunkLength / 2)].pos.x;
    player.position.z =
      cubes[round(chunkLength / 2)][round(chunkLength / 2)].pos.z;
    gameState = "play";
    text = createGraphics(window.innerWidth - 4, window.innerHeight - 4);
    text.textFont('Source Code Pro');
    text.textAlign(CENTER);
    text.textSize(133);
    text.fill('white');
    text.noStroke();
    text.text('loading...', width * 0.5, height * 0.5);
    texture(text);
    plane(windowWidth,windowHeight)
  } else if (gameState === "play") {
    if (keyIsDown(13) && frameCount % 3 === 0 && !toggledFly) {
      if (playerCanFly == false) {
        playerCanFly = true;
        playerTouching = false;
        //console.log("can fly");
      } else {
        playerCanFly = false;
        //console.log("cant fly");
      }
      toggledFly = true;
    }
    if (frameCount % 10 == 0) {
      toggledFly = false;
    }
    if (!playerCanFly) {
      if (!playerTouching) {
        player.position.y += fallSpeed;
        if (fallSpeed <= terminalVel && frameCount % 4 == 0) {
          fallSpeed += 5;
          //console.log("falling...");
        }
        if (getPlayerTouchingGround()) {
          fallSpeed = 20;
        }
      } else if (playerTouching) {
        if (getPlayerTouchingGround()) {
          playerTouching = true;
          try {
            player.position.y =
              cubes[round(player.position.x / 10)][
                round(player.position.z / 10)
              ].h - 50;
          } catch (error) {
            playerTouching = false;
          }
        } else if (keyIsDown(32) && frameCount % jumpFrame === 0) {
          player.position.y -= 20;
          playerTouching = false;
          fallSpeed = 1;
          jumpFrame = 2;
        } else {
          try {
            player.position.y =
              cubes[round(player.position.x / 10)][
                round(player.position.z / 10)
              ].h - 50;
          } catch (error) {
            playerTouching = false;
          }
        }
      }
      if (getPlayerTouchingGround()) {
        playerTouching = true;
        fallSpeed = 10;
        try {
          player.position.y =
            cubes[round(player.position.x / 10)][round(player.position.z / 10)]
              .h - 50;
        } catch (error) {
          playerTouching = false;
        }
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
