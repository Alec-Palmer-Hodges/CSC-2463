function setup() {
    createCanvas(400, 200);
}

function draw() {
    background(0);

    fill(255, 255, 0);
    circle(100, 100, 100);

    noStroke();
    fill(0);
    triangle(40, 150, 40, 50, 100, 100);

    fill(255, 0, 0);
    rect(175, 100, 100, 50); //bottom half of ghost
    ellipse(225, 100, 100, 100); //top half of ghost
    fill(255, 255, 255); //eye whites
    circle(200, 95, 25);
    circle(250, 95, 25);
    fill(0, 0, 255);//blue part of eyes
    circle(250, 95, 14);
    circle(200, 95, 14);
}