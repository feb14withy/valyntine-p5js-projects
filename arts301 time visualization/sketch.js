var ringGraphicsObject;
var ringObjectsArray = [];
var maxRings = 7;

var sineFrequency1;
var sineFrequency2;
var sineFrequency3;
var pingNoise;

var rootClosestNote;
var secondClosestNote;
var highestClosestNote;


const SINE_WAVE_VOLUME = 0.1;
const ALL_RINGS_WIDTH = 15;
const ALL_RINGS_GROWTH_FACTOR = 5;

function setup() {
  createCanvas(1280, 800);

  ringGraphicsObject = createGraphics(width, height);
  //create the array for the ring objects
  for(let i = 0; i < maxRings; i++)
  {
    var randomRingColour = [random(0, 255), random(0, 255), random(0, 255)];
    var randomMaxRadius = random(50, 850);
    var ringMovementFactor = random(2, 50);
    var ringGrowthFactor = random(1, 3);
    ringObjectsArray[i] = createNewRing(ringGraphicsObject, random(200, width), height/2, 0, randomRingColour, randomMaxRadius, ringMovementFactor, ringGrowthFactor);
    
  }

  sineFrequency1 = new p5.Oscillator('sine');
  sineFrequency2 = new p5.Oscillator('sine');
  sineFrequency3 = new p5.Oscillator('sine');
  pingNoise = new p5.Oscillator('square');

  pingNoise.freq(440);

  sineFrequency1.amp(SINE_WAVE_VOLUME);
  sineFrequency2.amp(SINE_WAVE_VOLUME);
  sineFrequency3.amp(SINE_WAVE_VOLUME);
  pingNoise.amp(SINE_WAVE_VOLUME);
  
  sineFrequency1.start();
  sineFrequency2.start();
  sineFrequency3.start();

}

function draw() {
  rootClosestNote = ringObjectsArray[2][3];
  secondClosestNote = ringObjectsArray[4][3] * 1.25;
  highestClosestNote = ringObjectsArray[6][3] * 1.75;

  sineFrequency1.freq(rootClosestNote);
  sineFrequency2.freq(secondClosestNote);
  sineFrequency3.freq(highestClosestNote);

  if(frameCount % 58 == 0)
  {
    pingNoise.start();
  }
  else{
    pingNoise.stop();
  }

  //print(rootClosestNote, secondClosestNote, highestClosestNote);
  
  //moon spin variables, based on frame rate
  var positionIncrementer = frameCount / 50;
  var spinMagnitude = 160;

  //set the moon's position
  spinningEllipseHorizontalPosition = sin(positionIncrementer) * spinMagnitude;
  spinningEllipseVerticalPosition = cos(positionIncrementer) * spinMagnitude;

  //set background colours based on the absolute value of the moon's position
  backgroundRed = abs(spinningEllipseHorizontalPosition);
  backgroundBlue = abs(spinningEllipseVerticalPosition);

  background(backgroundRed / 2, 0, backgroundBlue / 2);

  //line of time
  stroke(0);
  strokeWeight(10);
  line(0, height/2, width, height/2);

  //earth & moon border
  strokeWeight(5);

  //render expanding rings
  ringGraphicsObject.clear();

  for(let i = 0; i < ringObjectsArray.length; i++)
  {

    //fallback. if the ring is not in viewing range, create a new one in its place.
    if(ringObjectsArray[i][1] + ringObjectsArray[i][3] < 0)
    {
      var randomRingColour = [random(0, 255), random(0, 255), random(0, 255)];
      var randomMaxRadius = random(50, 850);
      var ringMovementFactor = random(2, 50);
      var ringGrowthFactor = random(1, 3);
      ringObjectsArray[i] = createNewRing(ringGraphicsObject, random(200, width), height/2, 0, randomRingColour, randomMaxRadius, ringMovementFactor, ringGrowthFactor);
    }

    if(ringObjectsArray[i][3] < ringObjectsArray[i][5])
    {
      ringObjectsArray[i][3] += ringObjectsArray[i][6];
    }

    
    ringObjectsArray[i][1] -= ringObjectsArray[i][7];

    renderRing(ringObjectsArray[i][0], ringObjectsArray[i][1], ringObjectsArray[i][2], ringObjectsArray[i][3], ALL_RINGS_WIDTH, ringObjectsArray[i][4]); //render the ring we're talking about, because of course B)
  }



  image(ringGraphicsObject, 0, 0);
  

  //big ellipse, earth
  fill(0,0,255);
  stroke(0,0,150);
  ellipse(width/2, height/2, 150);

  //rotating ellipse, moon
  fill(255);
  stroke(150);
  ellipse(spinningEllipseHorizontalPosition + (width/2), spinningEllipseVerticalPosition + (height/2), 50);


}

//creates a new ring "object". i'm starting from scratch and i really don't want to have to relearn OOP right now, so i'm macgyver-ing this as my placeholder. perhaps if i expand on this later i'll make all of this in a seperate folder using objects instead.
function createNewRing(graphicsObject, xPosition, yPosition, ringRadius, ringColour, maxRingRadius, movementFactor, growthFactor)
{
  let newRingArray = [graphicsObject, xPosition, yPosition, ringRadius, ringColour, maxRingRadius, movementFactor, growthFactor];
  print(newRingArray);
  return newRingArray;
}

//renders a ring to the graphics object. MUST parse in an array for the ringColour.
function renderRing(graphicsObject, xPosition, yPosition, ringRadius, ringWidth, ringColour)
{
  
  graphicsObject.fill(ringColour[0], ringColour[1], ringColour[2]);
  graphicsObject.noStroke();

  graphicsObject.circle(xPosition, yPosition, ringRadius);
  graphicsObject.erase();
  graphicsObject.circle(xPosition, yPosition, ringRadius - ringWidth);
  graphicsObject.noErase();

  /*
  print("Created Ring!: ");
  print("co-ordinates, x: ", xPosition, "| y: ", yPosition);
  print("ring radius + width: ", ringRadius, ", ", ringWidth);
  print("ring colour: ", ringColour);
  print("stroke colour: ", strokeColour);
  */
}

function mousePressed() {
  userStartAudio(); // resume Web Audio
}