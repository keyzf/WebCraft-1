class Chunk {
  constructor(x, z, parent) {
    this.position = { x: x, z: z };
    this.parent = parent;
    //console.log(this.position.x)
    this.cubes = [];
    for (var i = 0; i < 16; i++) {
      this.cubes[i] = [];
      for (var j = 0; j < 16; j++) {
        this.cubes[i].push(
          new Block(i + this.position.x*16, j + this.position.z * 16, this)
        );
      }
    }
    this.shown = false;
    this.currChunk = false;
  }
  render() {
    for (var i in this.cubes) {
      for (var j in this.cubes[i]) {
        this.cubes[i][j].render();
        this.cubes[i][j].update();
      }
    }
    this.update();
  }
  update() {
    //console.log(world.currPlayerChunk.x-this.position.x)
    if(world.currPlayerChunk.x-this.position.x>renderDistance){
      //console.log('+x')
      this.position.x = world.currPlayerChunk.x+renderDistance-1
      this.refresh_()
    }
    else if(world.currPlayerChunk.x-this.position.x<-renderDistance){
      //console.log('-x')
      this.position.x = world.currPlayerChunk.x-renderDistance+1
      this.refresh_()
    }
    else if(world.currPlayerChunk.z-this.position.x>renderDistance){
      this.position.z = world.currPlayerChunk.z+renderDistance-1
      this.refresh_()
    }
    else if(world.currPlayerChunk.z-this.position.z<-renderDistance){
      //console.log('-z')
      this.position.z = world.currPlayerChunk.z-renderDistance+1
      this.refresh_()
    }
  }
  refresh_() {
    this.cubes = [];
    for (var i = 0; i < 16; i++) {
      this.cubes[i] = [];
      for (var j = 0; j < 16; j++) {
        this.cubes[i].push(
          new Block(i + this.position.x*16, j + this.position.z*16, this)
        );
      }
    }
  }
}
