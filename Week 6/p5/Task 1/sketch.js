let myArr = [];
let xPos = 0;


function setup() {
  createCanvas(1024,400);
  background(255);
  for (let i = 0; i < 256; i++) {
    myArr.push(i);
    myArr = shuffle(myArr);
    //myArr.reverse();
  }
  //console.log(myArr);
}

function draw() {
  noStroke();
  noLoop();
  for (let i = 0; i < myArr.length; i++) {
    fill(myArr[i],0,120);
    rect(xPos,0,width/256,height);
    xPos = xPos+(width/256);
  }
}