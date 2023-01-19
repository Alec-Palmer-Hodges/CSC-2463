function setup() {
    createCanvas(200, 200);
}

function star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;

    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
        let sx = x + cos(a) * radius2;
        let sy = y + sin(a) * radius2;
        vertex(sx, sy);
        sx = x + cos(a + halfAngle) * radius1;
        sy = y + sin(a + halfAngle) * radius1;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}

function draw() {
    background(0, 0, 130);

    stroke(255);
    strokeWeight(3);
    fill(0, 150, 0);
    circle(100, 100 , 110);

    fill(255, 0, 0);
    star(width/ 2, height / 2, 25, 60, 5);
}