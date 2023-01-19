function setup() {
    createCanvas(800, 800);
}

function draw() {

    colorMode(RGB, 255, 255, 255, 1);
    background(255);
    noStroke();

    fill(255, 0, 0, 0.3);
    circle(100, 100, 100);

    fill(0, 0, 255, 0.3);
    circle(70, 150, 100);

    fill(0, 255, 0, 0.3);
    circle(130, 150, 100);
}