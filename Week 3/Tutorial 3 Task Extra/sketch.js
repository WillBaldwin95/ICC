let x;
let easing = 0.05

function setup() {
  createCanvas(800,800);
  x = width/2;
}

function draw() {
  let targetX = mouseX
  background(204);
  x += (targetX - x) * easing;
  line(x,0,x,height)
}