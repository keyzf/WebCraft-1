class Player extends RoverCam { 
  constructor() {
    super();
    this.dimensions = createVector(1, 3, 1); // min elevation = 0.2
    this.velocity = createVector(0, 0, 0);
    this.gravity = createVector(0, 0.03, 0);
    this.grounded = true;
    this.speed = 3;
    this.sensitivity = 0.02;
    this.usePointerLock()
  }

  update() {
    this.speed = 3;
    this.sensitivity = 0.02;
    if (keyIsDown(16)) {
      this.sensitivity = 0.04;
      this.speed = 5;
    }
    if (keyIsPressed && key == "e") {
      this.grounded = false;
      return;
    }
    this.velocity.add(this.gravity);
    this.position.add(this.velocity);

    if (this.grounded && keyIsDown(32)) {
      // space
      this.grounded = false;
      this.velocity.y = -1.5;
      this.position.y -= 0.2;
    }
  }
}
