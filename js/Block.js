class Block {
  constructor(x, z,parent) {
    this.pos = { x: x, z: z };
    //console.log(this.pos)
    this.dimensions = createVector(10, 10, 10);
    var i = x;
    var j = z;
    this.h =
      round(
        simplex.noise2D(i / 20, j / 20) * 1 +
        simplex.noise2D(i / 350, j / 350) * 2 +
        simplex.noise2D(i / 550, j / 550) * 5 +
        simplex.noise2D(i / 800, j / 800) * 10 +
        simplex.noise2D(i / 2000, j / 2000) * 100 +
        simplex.noise2D(i / 10000, j / 10000) * 500
      ) * 10;
    this.position = createVector(x / 10, this.h, z / 10);
    this.shown = true;
    this.current = false
    this.parent = parent
  }
  render() {
    if (this.shown) {
      push();
      translate(this.pos.x * 10, this.h, this.pos.z * 10);
      normalMaterial();
      box(10);
      pop();
    }
  }
  update() {
    //this.showhide();
    this.playerInteract()
  }
  showhide() {
    if (
      player.position.z / 10 > this.pos.z + 20 ||
      player.position.z / 10 < this.pos.z - 20
    ) {
      this.shown = false;
    } else if (
      player.position.x / 10 > this.pos.x + 20 ||
      player.position.x / 10 < this.pos.x - 20
    ) {
      this.shown = false;
    } else if (
      player.position.y / 10 > this.pos.y + 20 ||
      player.position.y / 10 < this.pos.y - 20
    ) {
      this.shown = false;
    } else {
      this.shown = true;
    }
  }
  playerInteract() {
    if(round(player.position.x / 10)===this.pos.x&&round(player.position.z / 10)===this.pos.z){
      this.current= true
      world.midChunk = {x:this.parent.position.x/16,z:this.parent.position.z/16}
      //console.log(world.midChunk)
    }
    else{
      this.current = false
    }
  }
}
