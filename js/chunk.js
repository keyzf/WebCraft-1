class Chunk {
  constructor(x,z) {
    this.position = {x:x,z:z}
    for (i = 0; i < chunkWidth; i++) {
      cubes[i] = [];
      for (j = 0; j < chunkLength; j++) {
        cubes[i].push(new block(i+x*chunkWidth,j+x*chunkLength));
      }
    }
  }
  render() {
    for (var i in cubes) {
      for (var j in cubes[i]) {
        cubes[i][j].render();
        cubes[i][j].playerInteract();
        cubes[i][j].update();
      }
    }
  }
}
