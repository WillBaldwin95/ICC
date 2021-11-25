let x =[]

function setup(){
  createCanvas(800,600);
  noStroke();
  fill(255,200);
  for(let i=0; i<300; i++){
    x[i] = random(-1000,200);
  }
}

function draw() {
  background(0);
  for(let i=0; i<300; i++){
    x[i] += 2.5;
    let y = i * 4.0;
    arc(x[i],y,12,12,0.52,5.76);
  }
}