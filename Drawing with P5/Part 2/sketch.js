function setup() {
    // Creating a canvas
    createCanvas(800, 800);
}

function draw() {

    colorMode(RGB, 255, 255, 255, 1); // Sets the default color values to RGB with the opion to change the opacity value
    background(255); // Sets background to white
    noStroke(); // Takes off the outline for the shapes that are created

    fill(255, 0, 0, 0.3); // Used to make the circle red
    circle(100, 100, 100);

    fill(0, 0, 255, 0.3); // Used to make the circle blue
    circle(70, 150, 100);

    fill(0, 255, 0, 0.3); // Used to make the circle green
    circle(130, 150, 100);
}