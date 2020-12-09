var fixedRect, movingRect,o1,o2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  
  fixedRect.velocityX = -4;
  movingRect.velocityX = 4;
  

  /*fixedRect.velocityY = -4;
  movingRect.velocityY = 4;
  */
 
  o1 = createSprite(600,200,100,40);
  o1.shapeColor = "blue";

  o2 = createSprite(800,200,40,100);
  o2.shapeColor = "blue";
  
}

function draw() {
  background(0,0,0);  
 /* movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 */
  bounceOff(movingRect,fixedRect);


/* if(isTouching(movingRect,o1)){
  movingRect.shapeColor = "red";
  o1.shapeColor = "red";

 }
else{
  movingRect.shapeColor = "green";
  o1.shapeColor = "green";                                           
}*/

 drawSprites();
}
