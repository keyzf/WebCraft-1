var player,world,renderDistance=5;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  console.log("loading...");
  world = new World();
}

function draw() {
  if (world.gameState === "loading") {
    ltext = createGraphics(window.innerWidth - 4, window.innerHeight - 4);
    ltext.textFont("Source Code Pro");
    ltext.textAlign(CENTER);
    ltext.textSize(133);
    ltext.fill("white");
    ltext.noStroke();
    ltext.text("loading...", width * 0.5, height * 0.5);
    texture(ltext);
    plane(windowWidth, windowHeight);
    world.generate()
    world.gameState = 'play'
  }
  world.update()
  world.play()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
