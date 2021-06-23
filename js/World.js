class World {
  constructor() {
    this.player = "";
    this.playerTouching = "";
    this.fallSpeed = "";
    this.jumpFrame = "";
    this.terminalVel = "";
    this.toggledFly = "";
    this.playerCanFly = "";
    this.gameState = "loading";
    this.chunks = [];
    this.playerSpawned = false;
    this.midChunk = "";
  }
  generate() {
    background("black");
    if (this.gameState === "loading") {
      this.playerTouching = false;
      this.fallSpeed = 20;
      this.jumpFrame = 1;
      this.terminalVel = 300;
      this.toggledFly = false;
      this.playerCanFly = false;
      for (var i = 0; i < 5; i++) {
        this.chunks[i] = [];
        for (var j = 0; j < 5; j++) {
          this.chunks[i][j] = new Chunk(i, j, this);
        }
      }
      //console.log(this.chunks);
      player = createRoverCam();
      player.usePointerLock();
      player.setState({ speed: 5 });
      if (!this.playerSpawned) {
        player.position.y = this.chunks[2][2].cubes[8][8].h - 100;
        player.position.x = this.chunks[2][2].cubes[0].length * 16 * 2;
        player.position.z = this.chunks[2][2].cubes[0].length * 16 * 2;
        this.playerSpawned = true;
      }
      this.gameState = "play";
    }
  }
  play() {
    background("black");
    if (this.gameState === "play") {
      this.update()
      for (var i in this.chunks) {
        for (var j in this.chunks[i]) {
          this.chunks[i][j].render();
        }
      }
    }
  }
  update() {}
}
