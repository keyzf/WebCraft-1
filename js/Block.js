class Block {
  constructor(x, z) {
    this.pos = { x: x, z: z };
    //console.log(this.pos)
    this.dimensions = createVector(10, 10, 10);
    var i = x;
    var j = z;
    this.h =
      round(
        noise(i / 20, j / 20) * 2 +
          noise(i / 350, j / 350) * 50 +
          noise(i / 550, j / 550) * 100 +
          noise(i / 800, j / 800) * 200 +
          noise(i / 2000, j / 2000) * 500 +
          noise(i / 10000, j / 10000) * 500
      ) * 10;
    this.position = createVector(x / 10, this.h, z / 10);
    this.shown = true;
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
    this.showhide();
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
  playerInteract() {}
}
