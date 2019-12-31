let bgColor = 255;
let toSaveFilenameAs = "scribbler-canvas"
let extension = "png";

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background(bgColor);

  drawMarkerLines()
}

function handleFilename(event) {
  toSaveFilenameAs = event.target.value;
}

function saveThisCanvas() {
  saveCanvas(canvas, toSaveFilenameAs, extension)
}

function clearCanvas() {
  background(bgColor);

  drawMarkerLines()
}

function drawMarkerLines() {
  // for (let i = 0; i < width; i += 50) {
  //   stroke(0, 0, 255)
  //   strokeWeight(2)
  //   line(0, i, width, i)
  // }
}

function draw() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let mx = mouseX;
    let my = mouseY;
    let pmx = pmouseX;
    let pmy = pmouseY;

    if (mouseIsPressed) {
      setStroke()
      strokeWeight(4)
      line(mx, my, pmx, pmy)
    }
  }
}

function setStroke() {
  stroke(0)
}