

function setup() {
  createCanvas(500,500);
  background(0);
}

function draw(){
  
  for (let x = 25; x < width; x = x + 50) {
    
    for (let y = 25; y < height; y = y + 50){
    fill(random(255), 0, random(255));
    ellipse(x,y,50,50);
    
  } 
} 
}

//fill(random(255), 0, random(255));