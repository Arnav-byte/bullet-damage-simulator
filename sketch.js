var wall,thickness;
var bullet,speed,weight;


function setup() {
  createCanvas(1600,400);

  thickness = random(22,83);
   speed = random(221,321);
   weight = random(30,52);

 wall = createSprite(1200,200,thickness,height);

 bullet = createSprite(600,200,60,20);     
 bullet.shapeColor = "brown";
}

function draw() {
  background("black");  

  bullet.velocityX = speed;

  if(hasCollided(bullet,wall)){
  var damage =0.5* weight* speed* speed/(thickness* thickness* thickness);

  if(damage>10){
   wall.shapeColor = (255,0,0);
  }
  
  if(damage<10){
   wall.shapeColor = (0,255,0);
  }

  }

  drawSprites();
}
function hasCollided(lbullet,lwall)
{
 bulletRightEdge = lbullet.x +lbullet.width;
 wallLeftEdge = lwall.x;

if(bulletRightEdge>=wallLeftEdge)
{
     return true 
  }
    return false;
}