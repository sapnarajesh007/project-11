var pathImg, boyImg
var boy, path
function preload(){
  //pre-load images
  pathImg = loadImage("path.png")
  boyImg = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;
  path.y = height / 2;

  boy = createSprite(20,280,20,50);
  boy.addAnimation("boy",boyImg);
  boy.scale = 0.1;

  leftBoundary = createSprite(0,0,100,800);
  leftBoundary.visible = false;

  rightBoundary = createSprite(410,0,100,800);
  rightBoundary.visible = false;

  boy.collide(rightBoundary);
  boy.collide(leftBoundary);
}

function draw() {
  if(path.y > 400){
    path.y = height/2;
  }
 boy.x = mouseX;
  background(0);
 drawSprites();
 

}
