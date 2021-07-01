//backup file,will be removed soon.

function setup() {
  createCanvas(500, 500, WEBGL);
}

function draw() {
  angleMode(DEGREES);
  orbitControl();
  background("black");

  //front
  push();
  translate(0, 0, 5);
  plane(10, 10);
  pop();

  //back
  push();
  translate(0, 0, -5);
  plane(10, 10);
  pop();

  //right
  push();
  translate(5, 0, 0);
  rotateY(90);
  plane(10, 10);
  pop();

  //left
  push();
  translate(-5, 0, 0);
  rotateY(90);
  plane(10, 10);
  pop();

  //top
  push();
  translate(0, 5, 0);
  rotateX(90);
  plane(10, 10);
  pop();

  //bottom
  push();
  translate(0, -5, 0);
  rotateX(90);
  plane(10, 10);
  pop();
}
