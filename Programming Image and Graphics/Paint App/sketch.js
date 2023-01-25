function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    colorMode(RGB, 255, 255, 255, 1);
    background(235);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    noStroke();
    // Red
    fill(255, 0, 0);
    square(5, 10, 25);
    // Orange
    fill(255, 165, 0);
    square(5, 40, 25);
    // Yellow
    fill(255, 255, 0);
    square(5, 70, 25);
    // Green
    fill(0, 255, 0);
    square(5, 100, 25);
    // Cyan
    fill(0, 255, 255);
    square(5, 130, 25);
    // Blue
    fill(0, 0, 128);
    square(5, 160, 25);
    // Magenta
    fill(255, 0, 255);
    square(5, 190, 25);
    // Brown
    fill(139, 69, 19);
    square(5, 220, 25);
    // White
    fill(255, 255, 255);
    square(5, 250, 25);
    // Black
    fill(0, 0, 0);
    square(5, 280, 25);
}

function mouseIsPressed() {
    if (collide(5, 10)) {
        selected = "red";
    } else if (collide (5, 40)) {
        selected = "orange";
    }  else if (collide (5, 70)) {
        selected = "yellow";
    }  else if (collide (5, 100)) {
        selected = "green";
    }  else if (collide (5, 130)) {
        selected = "cyan";
    }  else if (collide (5, 160)) {
        selected = "blue";
    }  else if (collide (5, 190)) {
        selected = "magenta";
    }  else if (collide (5, 220)) {
        selected = "brown";
    }  else if (collide (5, 250)) {
        selected = "white";
    }  else if (collide (5, 280)) {
        selected = "black";
    } 
}

function collide ( x, y) {
    //2d
    if (mouseX >= x &&         // right of the left edge AND
        mouseX <= x + 20 &&    // left of the right edge AND
        mouseY >= y &&         // below the top AND
        mouseY <= y + 20) {    // above the bottom
            return true;
    }
    return false;
    };