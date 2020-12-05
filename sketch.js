var car, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1600,400);

  //car and wall
  car = createSprite(200,200,60,40);
  car.shapeColor = "pink";

  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = "white";

  //intitializing the speed and weight of the car
  speed = Math.round(random(55,90));
  weight = Math.round(random(400,1500));

  //calculating deformation
  deformation = 0.5 * weight * speed * speed/22500;

}

function draw() {
  background(0); 
  
  //assigning the car velocity
  car.velocityX = speed;

  //making car sensitive to the wall

  if (wall.x - car.x < wall.width/2 + car.width/2) {
     car.velocityX = 0;

     if (deformation < 100) {
       car.shapeColor = rgb(0,255,0);
     } 

     if (deformation > 100 && deformation < 180) {
       car.shapeColor = rgb(230,230,0);
     }

     if (deformation > 180) {
       car.shapeColor = rgb(255,0,0);
     }
  }
  
  car.depth = wall.depth;
  car.depth = car.depth + 1;

  drawSprites();
}