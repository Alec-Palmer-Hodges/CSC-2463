function setup() {
    createCanvas(400, 200); // Used to create a canvas
}

function draw() {
    background(0); // Used to set the background color to black

    fill(255, 255, 0); // Sets circle to yellow
    circle(100, 100, 100); // Main body of Pac-man

    noStroke(); // Takes off the outline
    fill(0); // Sets color to black
    triangle(40, 150, 40, 50, 100, 100); // Pac-mans "mouth"

    fill(255, 0, 0); // Red ghost body
    rect(175, 100, 100, 50); //bottom half of ghost
    ellipse(225, 100, 100, 100); //top half of ghost

    fill(255, 255, 255); // White eyes
    circle(200, 95, 25); // Left eye
    circle(250, 95, 25); // Right eye

    fill(0, 0, 255); // Blue Pupils
    circle(200, 95, 14); // Left eye
    circle(250, 95, 14); // Right eye
}