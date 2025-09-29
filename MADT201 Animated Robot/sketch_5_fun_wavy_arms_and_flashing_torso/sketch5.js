var rotationAngle = 45;

var armLength = 400;
var armWidth = 75;

var leftArmPoint = [200,300];
var rightArmPoint = [400, 300];

var centerTorsoColour = [0, 0, 0];

var leftArmRotationAngle = 135;
var rightArmRotationAngle = 315;

const ARM_ROTATION_FACTOR = 5;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw() {
  background(220);

  fill(80);
  stroke(40);
  strokeWeight(10);

  // torso, always flashing

  for(i = 0; i < centerTorsoColour.length; i++) 
    {
        centerTorsoColour[i] = random(0,255);
        round(centerTorsoColour[i]); 
    }

  rect(200,300,200,300);
  fill(centerTorsoColour[0], centerTorsoColour[1], centerTorsoColour[2]);
  rect(250, 350, 100, 200);


  // head & face
  fill(80);
  ellipse(300,175,250);
  drawCrossEye(250, 150, 30);
  drawCrossEye(350, 150, 30);
  arc(300, 200, 100, 50, 0, 180, open);



  //arms, starting with the left. point of rotation is the bottom left.
  push();
  translate(leftArmPoint[0], leftArmPoint[1]);
  rotate(leftArmRotationAngle);
  rect(0, 0, armLength, armWidth);
  pop();

  //now drawing the right arm
  push();
  translate(rightArmPoint[0], rightArmPoint[1]);
  rotate(rightArmRotationAngle);
  rect(0, 0, armLength, armWidth);
  pop();

  //hat
  fill(200);
  stroke(150);
  strokeWeight(5);
  line(100, 100, 500, 100);
  rect(175, 25, 250, 75);


  leftArmRotationAngle += ARM_ROTATION_FACTOR;
  rightArmRotationAngle += ARM_ROTATION_FACTOR;
}

function drawCrossEye(xPosition, yPosition, lineSize)
{
  line(xPosition - lineSize, yPosition - lineSize, xPosition + lineSize, yPosition + lineSize);
  line(xPosition + lineSize, yPosition - lineSize, xPosition - lineSize, yPosition + lineSize);
}

