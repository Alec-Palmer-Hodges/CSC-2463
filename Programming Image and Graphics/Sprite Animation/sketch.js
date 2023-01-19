let spritesheet;
let spritedata;

let animation = [];

let sprite = [];

function preload() {
    spritedata = loadJSON('Sprite Animation\sprite\sprite.json');
    spritesheet = loadImage('Sprite Animation\sprite\spelunky-guy.png');
}

function setup() {
    createCanvas(640, 480);
    let frames = spritedata.frames;
    for (let i = 0; i < frames.length; i++) {
        let pos = frames[i].position;
        let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
        animation.push(img);
    }

    for (let i = 0; i < 2; i++) {
        sprites[i] = new Sprite(animation, 0, i * 75, random(0.1, 0.4));
    }
}

function draw() {
    background(0);

    for (let sprite of sprites) {
        sprite.show();
        sprite.animate();
    }
}