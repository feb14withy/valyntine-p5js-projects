var rotationAngle = 45;

var armLength = 400;
var armWidth = 75;

var leftArmPoint = [200,300];
var rightArmPoint = [400, 300];

var centerTorsoColour = [0, 0, 0];

var waveDegreesX;
var waveDegreesY;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw() {
  background(220);

  fill(80);
  stroke(40);
  strokeWeight(10);

  //map the X and Y positions of the mouse to degrees that we can use for the arms
  waveDegreesX = map(mouseX, 0, width, -20, 20);
  waveDegreesY = map(mouseY, 0, height, -20, 20);

  // torso, start flashing when clicked
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
  //also consider the addition degrees. mouseY changes left arm's rotation, mouseX changes right arm's rotation
  push();
  translate(leftArmPoint[0], leftArmPoint[1]);
  rotate(135 + waveDegreesY);
  rect(0, 0, armLength, armWidth);
  pop();

  //now drawing the right arm
  push();
  translate(rightArmPoint[0], rightArmPoint[1]);
  rotate(315 + waveDegreesX);
  rect(0, 0, armLength, armWidth);
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

