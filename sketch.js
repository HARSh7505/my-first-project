var box
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30)
}

function draw() 
{
  background(250);
  if(keyDown("right")){
  background("red") 
  }
  if(keyDown("left")){
    background("blue") 
    } 
drawSprites()
}




