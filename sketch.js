var FixedRect, MovingRect;

function setup() {
  createCanvas(800,400);
  FixedRect = createSprite(400,200,50,50);
  FixedRect.shapeColor = "green";

  MovingRect = createSprite(600, 200, 50, 50);
  MovingRect.shapeColor = "green";
}

function draw() {
  background(255,255,255);
  
  MovingRect.x = World.mouseX;
  MovingRect.y = World.mouseY;

  if(MovingRect.x - FixedRect.x < MovingRect.width/2 + FixedRect.width/2 &&
    FixedRect.x - MovingRect.x < FixedRect.width/2 + MovingRect.width/2 &&
    MovingRect.y - FixedRect.y < MovingRect.height/2 + FixedRect.height/2 &&
    FixedRect.y - MovingRect.y < FixedRect.height/2 + MovingRect.height/2){
      MovingRect.shapeColor = "red";
      FixedRect.shapeColor = "red";
    }

else{
  MovingRect.shapeColor = "green";
  FixedRect.shapeColor = "green";
}

drawSprites();
}