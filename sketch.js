var player,
  world,
  renderDistance = 2,
  gameState = "loading",
  text,
  simplex = new SimplexNoise('12047073465');

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  console.log("loading...");
  world = new World();
}

function draw() {
  if (gameState === "loading") {
    world.generate();
    text = createGraphics(window.innerWidth - 4, window.innerHeight - 4);
    text.textFont("Source Code Pro");
    text.textAlign(CENTER);
    text.textSize(133);
    text.fill("white");
    text.noStroke();
    text.text("loading...", width * 0.5, height * 0.5);
    texture(text);
    plane(windowWidth, windowHeight);
    gameState = "play";
  } else {
    world.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
