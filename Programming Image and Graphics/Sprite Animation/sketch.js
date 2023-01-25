let spriteSheet;
let spriteData;

let animation = [];

let sprite= [];

function preload() {
   // spriteData = loadJSON('sprite.json');
    spriteSheet = loadImage('Green.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    let frames = spriteData.frames;
    for (let i = 0; i < 9; i++) {
        let img = spriteSheet.get(i * 80, 0, 80, 80);
        animation.push(img);
    }
}

function draw() {
    background(255);
    
}