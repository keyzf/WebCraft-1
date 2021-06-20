class Chunk {
  constructor(x, z) {
    this.position = { x: x*16, z: z*16 };
    //console.log(this.position.x)
    this.cubes = []
    for (var i = 0; i < 16; i++) {
      cubes[i] = [];
      this.cubes[i] = [];
      this.cubes[i] = [];
      for (var j = 0; j < 16; j++) {
        cubes[i].push(new block(i+this.position.x, j+this.position.z));
        this.cubes[i].push(new block(i+this.position.x, j+this.position.z));
      }
    }
  }
  render() {
    //push()
    //translate(this.position.x*chunkWidth,0,this.position.z*chunkDepth)
    for (var i in this.cubes) {
      for (var j in this.cubes[i]) {
        this.cubes[i][j].render();
        this.cubes[i][j].playerInteract();
        this.cubes[i][j].update();
      }
    }
    //console.log('using chunkz')
    //pop()
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
