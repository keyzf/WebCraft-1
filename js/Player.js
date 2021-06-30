class Player extends RoverCam {
  constructor() {
    super();
    this.dimensions = createVector(1, 3, 1); // min elevation = 0.2
    this.velocity = createVector(0, 0, 0);
    this.gravity = createVector(0, 0.03, 0);
    this.grounded = true;
    this.speed = 3;
    this.sensitivity = 0.02;
    this.usePointerLock();
    this.controller =()=>{
        // default behavior
        if (!this.enableControl) return;
        var k = this.keyMap,
          p = this.p5;
          if(RoverCam.pointerLock){
        this.yaw((p.movedX * this.sensitivity) / 10); // mouse left/right
        this.pitch((p.movedY * this.sensitivity) / 10); // mouse up/down
        if (p.keyIsDown(k.my1[0]) || p.keyIsDown(k.my1[1]))
          this.moveY(this.speed); // a
        if (p.keyIsDown(k.my2[0]) || p.keyIsDown(k.my2[1]))
          this.moveY(-this.speed); // d
        if (p.keyIsDown(k.mx1[0]) || p.keyIsDown(k.mx1[1]))
          this.moveX(this.speed); // w
        if (p.keyIsDown(k.mx2[0]) || p.keyIsDown(k.mx2[1]))
          this.moveX(-this.speed); // s
        if (p.keyIsDown(k.mz1[0]) || p.keyIsDown(k.mz1[1]))
          this.moveZ(this.speed); // e
        if (p.keyIsDown(k.mz2[0]) || p.keyIsDown(k.mz2[1]))
          this.moveZ(-this.speed); // q
          }
    }
  }
  update() {}
}
