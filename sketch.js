var player,
  world,
  renderDistance = 2,
  gameState = "loading",
  ltext,
  simplex;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  console.log("loading...");
  world = new World();
  let seed = simplex = Math.round(random(-999999,999999))
  simplex = new SimplexNoise(seed)
}

function draw() {
  if (gameState === "loading") {
    world.generate();
    ltext = createGraphics(window.innerWidth - 4, window.innerHeight - 4);
    ltext.textFont("Arial");
    ltext.textAlign(CENTER);
    ltext.textSize(133);
    ltext.fill("white");
    ltext.noStroke();
    ltext.text("loading...", width * 0.5, height * 0.5);
    texture(ltext);
    plane(windowWidth, windowHeight);
    gameState = "play";
  } else {
    world.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
