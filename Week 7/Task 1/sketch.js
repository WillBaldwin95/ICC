let x,y,size;
let xSpeed,ySpeed,xDir,yDir

function setup() {
  createCanvas(1200,800);
  x = width/2;
  y = height/2;
  size = 10;
  xSpeed = random(0.3,5);
  ySpeed = random(0.3,5);
  yDir = 1;
  xDir = 1;
}

function draw() {
  background(255);
}

function myFunction() {
  function move() {}
  function display() {
    stroke(10);
    rectMode(CENTER);
    fill(0);
    rect(x, y, size, size);
    }
}



