function setup() {
  createCanvas(500,500);
  background(0);
  fill(0,0,255);
}

//function draw() {
  //let x = 25;
  //while (x<width){
    //ellipse(x,25,50,50);
    //x = x+50;
  //}
//}

function draw(){
  for (let x = 25; x < width; x = x + 50) {
    ellipse(x,25,50,50);
  }
}