

function setup() {
  createCanvas(500,500);
  background(255);
}

function draw(){
  let unit = 25;
  for (let x = 25; x < width; x = x + 50) {
    for (let y = 25; y < height; y = y + 50){

    switch(key){
		case "1":
			herringBone1(x,y,25);
		break;
		case "2":
			squares(x,y,25);
		break;
	}
	
			//circles(x,y,25);
  } 
} 
}

function herringBone1(xVal, yVal, unit) {
	stroke(0);
	strokeWeight(1);

	line(xVal, yVal, xVal - unit, yVal + unit);
	line(xVal, yVal, xVal + unit, yVal + unit);
	line(xVal, yVal - unit, xVal - unit, yVal);
	line(xVal, yVal - unit, xVal + unit, yVal);
	line(xVal, yVal - unit, xVal, yVal + unit);
	line(xVal + unit, yVal - unit, xVal + unit, yVal + unit);
} 

function squares(xVal, yVal, unit) {
	stroke(0);
	strokeWeight(1);

	rect(xVal, yVal, xVal + unit, yVal + unit);
}

//function circles(xVal, yVal, unit) {
	//stroke(0);
	//strokeWeight(1);

	//circles(xVal, yVal, xVal + unit);
//}

//fill(random(255), 0, random(255));