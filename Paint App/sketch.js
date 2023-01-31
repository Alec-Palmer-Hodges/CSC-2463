currentColor = "Black";
colorList = [
  "Red",
  "Orange",
  "Yellow",
  "Lime",
  "Cyan",
  "Blue",
  "Magenta",
  "Brown",
  "White",
  "Black",
];
squareSize = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  stroke("White");
  changeColor();
}

function draw() {
  stroke(currentColor);
  strokeWeight(10);
  if (mouseIsPressed) {
    if (mouseX <= squareSize && mouseY <= 40 * colorList.length) {
      index = int(mouseY / 40);
      currentColor = colorList[index];
    } else {
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
  }
}

function changeColor() {
  for (var i = 0; i < colorList.length; i++) {
    fill(colorList[i]);
    square(0, squareSize * i, squareSize);
  }
}