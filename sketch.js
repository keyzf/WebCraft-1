var player;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  console.log("loading...");
  w = new World();
}

function draw() {
  if (w.gameState === "loading") {
    text = createGraphics(window.innerWidth - 4, window.innerHeight - 4);
    text.textFont("Source Code Pro");
    text.textAlign(CENTER);
    text.textSize(133);
    text.fill("white");
    text.noStroke();
    text.text("loading...", width * 0.5, height * 0.5);
    texture(text);
    plane(windowWidth, windowHeight);
  }
  w.play();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
