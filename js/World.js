class World {
  constructor() {
    this.player = "";
    this.playerTouching = "";
    this.fallSpeed = "";
    this.jumpFrame = "";
    this.terminalVel = "";
    this.toggledFly = "";
    this.playerCanFly = "";
    this.chunks = [];
    this.playerSpawned = false;
    this.midChunk = "";
    this.shader = ''
  }
  generate() {
    background("black");
      this.playerTouching = false;
      this.fallSpeed = 20;
      this.jumpFrame = 1;
      this.terminalVel = 300;
      this.toggledFly = false;
      this.playerCanFly = false;
      for (var i = 0; i < renderDistance; i++) {
        this.chunks[i] = [];
        for (var j = 0; j < renderDistance; j++) {
          this.chunks[i][j] = new Chunk(i, j, this);
        }
      }
      //console.log(this.chunks);
      player = createRoverCam();
      player.usePointerLock();
      player.setState({ speed: 5 });
      if (!this.playerSpawned) {
        player.position.y = this.chunks[round(renderDistance/2)][round(renderDistance/2)].cubes[8][8].h - 100;
        player.position.x = this.chunks[round(renderDistance/2)][round(renderDistance/2)].cubes[8][8].pos.x;
        player.position.z = this.chunks[round(renderDistance/2)][round(renderDistance/2)].cubes[8][8].pos.z;
        this.playerSpawned = true;
      }
      //this.shader = loadShader('./shaders/shader.vert','./shaders/shader.frag')
      this.gameState = "play";
  }
  play() {
    background("black");
      this.update()
      for (var i in this.chunks) {
        for (var j in this.chunks[i]) {
          ambientLight(255, 255, 153);
          //shader(this.shader)
          this.chunks[i][j].render();
        }
    }
  }
  update() {}
}
