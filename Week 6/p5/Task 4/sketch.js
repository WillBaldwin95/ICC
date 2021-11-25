//Global var "num" = 120
let num = 120;

//x and y values not specified yet
let x = [];
let y = [];

function setup() {
  createCanvas(800,600);      //800 by 600 pxl canvas
  noStroke();                 //no outline
  fill(255,200);              //colour canvas greyscale
  for(let i=0; i<300; i++){   //increasing x and y values from 0 to 300
    x[i] = 0;                 //x value = i
    y[i] = 0;                 //y value = i
  }
}

function draw() { 
  background(0);              //black background
  for(let i=num-1; i>0; i--) {//i = 119 reducing to 0
    x[i] = x[i-1];
    y[i] = y[i-1];
  }

  x[0] = mouseX;              //x position following mouse
  y[0] = mouseY;              //y position following mouse

  for(let i=0; i<num; i++){
    fill(i*0.94);
    ellipse(x[i],y[i],30,30);
  }
}