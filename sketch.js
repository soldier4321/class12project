var player1, player_running ;
var ground, groundImage,invisibleleft,invisibleright;

function preload() {
  player_running = loadAnimation("Runner-1.png", "Runner-2.png");
 groundImage = loadImage("path.png")
}

function setup() {
  createCanvas(400, 400);
  ground = createSprite(200,200,400,400);
  ground.addImage("ground",groundImage);
  ground.velocityY = +4;
  player1 = createSprite(300,360,20,50);
  player1.addAnimation("running", player_running);
 player1.scale=0.1;
 invisibleleft = createSprite(370,200,60,400);
 invisibleleft.visible=false
 invisibleright = createSprite(25,200,60,400);
 invisibleright.visible=false
}

function draw() {
 background('red');
 createEdgeSprites();
 if (ground.y>400) {
 ground.y = ground.width / 2;
  }
  player1.x=World.mouseX
 player1.collide(invisibleleft)
 player1.collide(invisibleright)
 
 
 drawSprites();
}
