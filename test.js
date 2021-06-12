var cubes = [];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  for (i = 0; i < 50; i++) {
    cubes[i] = [];
    for (j = 0; j < 50; j++) {
      cubes[i][j] = [];
      for (k = 0; k < 50; k++) {
        console.log(round(noise(i, j, k)));
        cubes[i][j].push({
          pos: { x: i * 10, y: j * 10, z: k * 10 },
          noiseVal: round(noise(i/10, j/10, k/10)*100),
        });
      }
    }
  }
}

function draw() {
  background("black");
  normalMaterial();
  orbitControl();
  box(10);
  for(var i in cubes){
    for(var j in cubes[i]){
        for(var k in cubes[i][j]){
            if(cubes[i][j][k].noiseVal>=80){
            push();
            translate(cubes[i][j][k].pos.x,cubes[i][j][k].pos.y, cubes[i][j][k].pos.z);
            box(10);
            pop();
            }
        }
    }
  }
}
