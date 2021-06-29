var player,
  world,
  renderDistance = 3,
  gameState = "loading",
  text;

/*window.onbeforeunload = function (e) {
    // Cancel the event
    e.preventDefault();

    // Chrome requires returnValue to be set
    e.returnValue = 'Really want to quit the game?';
};

//Prevent Ctrl+S (and Ctrl+W for old browsers and Edge)
document.onkeydown = function (e) {
    e = e || window.event;//Get event

    if (!e.ctrlKey) return;

    var code = e.which || e.keyCode;//Get key code

    switch (code) {
        case 83:
        case 87:
            e.preventDefault();
            e.stopPropagation();
            break;
    }
};*/

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  console.log("loading...");
  world = new World()
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
    world.play()
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
