let myArr = [];
let mySentence = "I like/love creative coding, so far";
let chopper;
let likelove;
let xPos = 0;

function setup(){
  createCanvas(800,200);
  frameRate(2);
  background(255);
  chopper = mySentence.split(" ");
  likeLove = chopper[1].split("/");
  chopper[1] = likeLove[1];
  //console.log(chopper);
  //chopper = chopper.reverse();
  //chopper = chopper.join(" ");
  //chopper = shuffle(chopper);
}
function draw(){
  background(255);
  for (let i=0; i<chopper.length; i++) {

    text(chopper[i], xPos, random(10,height));
    xPos = xPos+(width/1000);
    if(xPos > width){
      xPos = 0;
    }
  }
  
}