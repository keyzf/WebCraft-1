class Chunk {
  constructor(x, z, parent) {
    this.position = { x: x * 16, z: z * 16 };
    this.parent = parent;
    //console.log(this.position.x)
    this.cubes = [];
    for (var i = 0; i < 16; i++) {
      this.cubes[i] = [];
      for (var j = 0; j < 16; j++) {
        this.cubes[i].push(new Block(i + this.position.x, j + this.position.z,this));
      }
    }
    this.shown = false
    this.currChunk = false
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
    let found=false;
    for (var i in this.cubes) {
      for (var j in this.cubes[i]) {
        if(this.cubes[i][j].current === true){found = true}
        break;
      }
    }
    if(found){
      this.currChunk = true
      //console.log([this.position.x/16,this.position.z/16])
    }
    else{
      this.currChunk = false
    }
  }
}
