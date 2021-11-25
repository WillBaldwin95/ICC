let myArr = [];
let mySentence = "I like/love creative coding, so far";
let chopper;
let likelove;

function setup(){
  createCanvas(800,200);
  frameRate(2);
  background(255);
  chopper = mySentence.split(" ");
  //console.log(chopper);
  chopper = chopper.reverse();
  chopper = chopper.join(" ");
}
function draw(){
  text(mySentence, 50, 100)
}