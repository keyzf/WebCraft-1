var player,world,renderDistance=5;

window.onbeforeunload = function (e) {
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
};

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
