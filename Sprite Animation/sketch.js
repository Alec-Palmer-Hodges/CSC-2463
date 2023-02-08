let spritesheet=[];
let animationSet = [];
let yLocation = 0;
let characters = [];

function preload() {
  spritesheet = [loadImage('../Assets/Green.png'),
                 loadImage('../Assets/Spelunky Guy.png')];
}


function setup() {
  createCanvas(windowWidth - 20,windowHeight - 20);
  for(sheet of spritesheet){
    for (let i = 0; i < 9; i++) {
      let img = sheet.get(80*i, 0, 80, 80);
      animationSet.push(img);
    } 
    characters.push(new Sprite(animationSet,random()*(width-80),yLocation+40));
    yLocation+= height/4;
    animationSet = [];
  }
}

function draw() {
  background(255);
  for(let sprite of characters){
    sprite.show();
    if(keyIsDown(RIGHT_ARROW)){
      sprite.walkRight();
    }else if(keyIsDown(LEFT_ARROW)){
      sprite.walkLeft();
    } else{
      sprite.stand();
    }
  }
}