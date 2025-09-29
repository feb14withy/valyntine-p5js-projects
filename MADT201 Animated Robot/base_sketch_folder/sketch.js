var rotationAngle = 45;

var armLength = 400;
var armWidth = 75;

var leftArmPoint = [200,300];
var rightArmPoint = [400, 300];

var centerTorsoColour = [0, 0, 0];

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw() {
  background(220);

  fill(80);
  stroke(40);
  strokeWeight(10);

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
  push();
  translate(leftArmPoint[0], leftArmPoint[1]);
  rotate(135);
  rect(0, 0, armLength, armWidth);
  pop();

  //now drawing the right arm
  push();
  translate(rightArmPoint[0], rightArmPoint[1]);
  rotate(315);
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

