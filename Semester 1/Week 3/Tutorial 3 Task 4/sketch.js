let x = 0;
let y = 0;
let easing = 0.01;


function setup() {
  createCanvas(800,800);
}

function draw() {
  let targetX = mouseX;
  let targetY = mouseY;
  x += (targetX - x) * easing;
  y += (targetY - y) * easing;
  ellipse(x, y, 12, 12);
  console.log(targetX + " : " + x);

}