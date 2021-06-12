class Chunk {
  constructor(x, z) {
    this.position = { x: x + 1, z: z + 1 };
    for (var i = 0; i < chunkWidth; i++) {
      cubes[i] = [];
      for (var j = 0; j < chunkLength; j++) {
        cubes[i].push(new block(i, j));
      }
    }
  }
  render() {
    console.log(cubes[1][1].pos)
    for (var i in cubes) {
      for (var j in cubes[i]) {
        push();
        translate(this.position.x,this,this.position.z)
        cubes[i][j].render();
        cubes[i][j].playerInteract();
        cubes[i][j].update();
        pop();
      }
    }
  }
  update() {
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
  }
}
