var bullet, wall;
var speed, weight, thickness;
var damage;

function setup() {
  createCanvas(1600, 400);

  bullet = createSprite(50, 200, 50, 50);
  wall = createSprite(1200, 200, thickness, height / 2);
  wall.shapeColor = color(80, 80, 80);
  speed = random(233, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  bullet.velocityX = speed;
}

function draw() {
  background(0, 0, 0);

  if (hasCollided(bullet, wall)) {
    bullet.velocityX = 0;
    damage = (0.5 * weight * speed * speed) / (thickness * thickness * thickness);

    if (damage > 10) {
      wall.shapeColor = color(255, 0, 0);
    }

    if (damage < 10) {
      wall.shapeColor = color(0, 255, 0);
    }
  }


  drawSprites();
}




