function setup() {
  createCanvas(800,800);
  strokeWeight(30);
  background(204);
}

function draw() {
  stroke(102);
  line(40, 0, 70, height);

  if (mouseIsPressed){
    stroke(0);
  } else if (keyIsPressed){
    stroke(150,80,120);
  }
    else {
    stroke(255);
  }

  line(0,70,width,50);
}