let rectWidth = 100;
let rectHeight = 100;

function setup(){
  createCanvas(800,700);
  background(200);
  noLoop();
}
function draw() {
  noFill();
	drawShape(rectWidth,rectHeight);
  drawShape(rectWidth*10,rectHeight*5);
  rectMode(CENTER);
  rect(100,100,20,100)
  ellipse(100,70,60,60);
  ellipse(81,70,16,16);
  ellipse(119,70,16,16);
  line(90,120,80,105);
  line(110,120,120,105);
  line(90,150,80,160);
  line(110,150,120,160);
}
function drawShape(rectangleWidth,rectangleHeight){
  let xPos = random(0, width);
  let yPos = random(0, height);

  rect(xPos,yPos,rectangleWidth,rectangleHeight);
}
