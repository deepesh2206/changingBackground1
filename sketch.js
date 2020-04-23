var ball;
var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(800,400);
  
  ball = createSprite(400,200,50,50);
  
}

function draw() {
  background(r,g,b);

  ball.x = mouseX;
  ball.y = mouseY;

  if(ball.x > 400){
    r = r + 1;
    g = g + 1;
    b = b + 1;
  }
  else{
    r = r + 5;
    g = g + 5;
    b = b + 5;
  }
  drawSprites();
}