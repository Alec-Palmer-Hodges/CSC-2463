function setup() {
    createCanvas(1000, 1000);
    colorMode(RGB, 255, 255, 255, 1);
    background(255);
    strokeWeight(5);
    stroke(0);
}

function draw() {
    noStroke();

    fill(255, 0, 0);
    square(0, 10, 25);

    fill(0, 255, 0);
    square(0, 40, 25);

    fill(255, 0, 255);
    square(0, 70, 25);

    fill(255, 255, 0);
    square(0, 100, 25);

    fill(255, 0, 0);
    square(0, 130, 25);

    fill(0, 255, 0);
    square(0, 160, 25);

    fill(255, 0, 255);
    square(0, 190, 25);

    fill(255, 255, 0);
    square(0, 220, 25);

    fill(255, 0, 255);
    square(0, 250, 25);

    fill(255, 255, 0);
    square(0, 280, 25);
}

function touchMoved() {
    line(mouseX, mouseY, pmouseX, pmouseY);
    return false;
}
