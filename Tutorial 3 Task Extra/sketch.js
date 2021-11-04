

function setup() {
  createCanvas(200,200);
  background(255);
}

function draw() {
  if (mouseIsPressed){
    stroke(0,255,0);
    let x = random(0,width);
    let y = random(0,height);
    line(x,y,x+10,y+10);
  }  
  if (keyIsPressed){
    stroke(255,0,0);
    let x = random(0,width);
    let y = random(0,height);
    line(x-10,y+10,x,y);
  
  }
}
