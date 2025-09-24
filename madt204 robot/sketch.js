var rotationAngle = 45;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw() {
  background(220);

  fill(80);
  stroke(40);
  strokeWeight(10);

  // torso 
  rect(200,300,200,300);
  fill(random(0,255),random(0,255),random(0,255));
  rect(250, 350, 100, 200);


  // head & face
  fill(80);
  ellipse(300,175,250);
  drawCrossEye(250, 150, 30);
  drawCrossEye(350, 150, 30);
  arc(300, 200, 100, 50, 0, 180, open);



  //arms

  //discover new points when rotated, assuming the center of the screen is the origin
  var newLeftRotationPoint = findNewRotationPoint(0,-100, rotationAngle);
  var newRightRotationPoint = findNewRotationPoint(0,100, rotationAngle);
  
  push();
  translate(width/2, height/2);
  rotate(rotationAngle);
  rect(-175,0, 75 ,400);
  rect(100,-400, 75 ,400);
  pop();

  //hat
  fill(200);
  stroke(150);
  strokeWeight(5);
  line(100, 100, 500, 100);
  rect(175, 25, 250, 75);


}

function drawCrossEye(xPosition, yPosition, lineSize)
{
  line(xPosition - lineSize, yPosition - lineSize, xPosition + lineSize, yPosition + lineSize);
  line(xPosition + lineSize, yPosition - lineSize, xPosition - lineSize, yPosition + lineSize);
}

//this function only works rotating points about the origin.
function findNewRotationPoint(originalX, originalY, angle)
{
  newRotationPoint = [0,0];

  //find horizontal
  newRotationPoint[0] = (originalX * cos(angle)) - (originalY * sin(angle))
  newRotationPoint[1] = (originalX * sin(angle)) - (originalY * cos(angle))
}