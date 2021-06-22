class Chunk {
  constructor(x, z) {
    this.position = { x: x*16, z: z*16 };
    //console.log(this.position.x)
    this.cubes = []
    for (var i = 0; i < 16; i++) {
      this.cubes[i] = [];
      for (var j = 0; j < 16; j++) {
        this.cubes[i].push(new Block(i+this.position.x, j+this.position.z));
      }
    }
  }
  render() {
    for (var i in this.cubes) {
      for (var j in this.cubes[i]) {
        this.cubes[i][j].render();
        this.cubes[i][j].update();
      }
    }
  }
}
