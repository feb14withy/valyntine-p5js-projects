let ringObjects = [];

function setup() {
  createCanvas(800, 400);
}

function draw() {

  var positionIncrementer = frameCount / 50;
  var spinMagnitude = 160;

  spinningEllipseHorizontalPosition = sin(positionIncrementer) * spinMagnitude;
  spinningEllipseVerticalPosition = cos(positionIncrementer) * spinMagnitude;

  backgroundRed = abs(spinningEllipseHorizontalPosition);
  backgroundBlue = abs(spinningEllipseVerticalPosition);

  background(backgroundRed, 0, backgroundBlue);

  stroke(0);
  strokeWeight(10);
  line(0, 200, 800, 200);



  strokeWeight(5);

  //big ellipse, earth
  fill(0,0,255);
  stroke(0,0,150);
  ellipse(400,200, 150);

  //rotating ellipse, moon
  fill(255);
  stroke(150);
  ellipse(spinningEllipseHorizontalPosition + 400, spinningEllipseVerticalPosition + 200, 50);


  if(mouseIsPressed)
  {
    createRing(ringObject, mouseX, mouseY, 100, 20);
    print("Created Ring! : ", ringObject);
  }

  image(ringObject, 0, 0);
  
}


function createRing(graphicsObject, xPosition, yPosition, ringRadius, ringWidth, strokeWidth)
{
  graphicsObject.fill(50);
  graphicsObject.circle(xPosition, yPosition, ringRadius);
  graphicsObject.circle(xPosition, yPosition, ringRadius - ringWidth);
  graphicsObject.erase();
  graphicsObject.circle(xPosition, yPosition, ringRadius - ringWidth);
  graphicsObject.noErase();
}
