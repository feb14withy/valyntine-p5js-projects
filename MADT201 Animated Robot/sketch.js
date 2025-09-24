let x = 200; 

let y = 200; 

let xIncrement = 0; 

let yIncrement = 0; 

  

function setup() { 

  createCanvas(400, 400); 

  rectMode(CENTER); 

  xIncrement = random(5,10); 

  yIncrement = random(5,10); 

  frameRate(30);

} 

  

function draw() { 

  background(0); 

  stroke(255); 

   

  if(0 > x || x > 400) 

    { 

      xIncrement *= -1; 

    } 

  if(0 > y || y > 400) 

    { 

      yIncrement *= -1; 

    } 

   

  x += xIncrement; 

  y += yIncrement; 

  fill(255); 

  ellipse(x, y, 50, 50); 

  textSize(50); 

  textAlign(CENTER); 

  fill(80); 

  text("DVD", x, y); 

} 