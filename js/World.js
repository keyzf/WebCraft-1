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
    this.currPlayerChunk = "";
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
      for (var i = -renderDistance; i < renderDistance; i++) {
        var arr = [];
        for (var j = -renderDistance; j < renderDistance; j++) {
          arr.push(new Chunk(i, j, this))
        }
        this.chunks.push(arr)
      }
      //console.log(this.chunks);
      player = new Player();
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
          //shader(this.shader)
          this.chunks[i][j].render();
        }
    }
  }
  update() {}
}
