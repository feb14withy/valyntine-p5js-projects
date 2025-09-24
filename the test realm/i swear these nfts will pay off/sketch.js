function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  for(let ellipseX = 50; ellipseX < 400; ellipseX += 50)
  {
    for(let ellipseY = 50; ellipseY < 400; ellipseY += 50)
    {
      fill(random(0,255));
      ellipse(ellipseX, ellipseY, random(0,50));
    }
    stroke(255,0,255);
    text("I SWEAR THESE NFTS WILL PAY OFF", 150,200);
    
  }
}