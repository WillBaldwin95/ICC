let myArr = [];

function setup() {
  createCanvas(1024,400);
  background(255);
  for (let i = 0; i < 256; i++) {
    myArr.push(i);
  }
  console.log(myArr);
}

function draw() {
  noLoop;
}