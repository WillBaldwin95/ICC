//Global var "num" = 120
let num = 120;

//x and y values not specified yet
let x = [];
let y = [];

function setup() {
  createCanvas(800,600);
  noStroke();
  fill(255,200);
  for(let i=0; i<300; i++){
    x[i] = 0;
    y[i] = 0;
  }
}

function draw() {
  background(0);
  for(let i=num-1; 1>0; i--) {
    x[i] = x[i-1];
    y[i] = y[i-1];
  }

  x[0] = mouseX;
  y[0] = mouseY;

  for(let i=0; i<num; i++){
    fill(i*0.94);
    ellipse(x[i],y[i],30,30);
  }
}