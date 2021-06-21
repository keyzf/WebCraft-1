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
      player = createRoverCam();
      player.usePointerLock();
      player.setState({ speed: 5 });
      this.gameState = "play";
      this.c = new Chunk(0, 0);
      this.c1 = new Chunk(1, 1);
      this.c2 = new Chunk(0, 1);
      this.c3 = new Chunk(1, 0);
      player.setState({ speed: 5 });
      player.position.y = this.c.cubes[1][1].h - 100;
      player.position.x = this.c.cubes[1][1].pos.x;
      player.position.z = this.c.cubes[1][1].pos.z;
    }
  }
  play() {
    background("black");
    this.generate();
    if (this.gameState === "play") {
      this.c.render();
      this.c1.render();
      this.c2.render();
      this.c3.render();
    }
  }
}
