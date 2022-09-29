let gap = 20;
let circNum = 30;
let circSize = 20;
let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(degrees);
}

function draw() {
  background('black');
 
  // main graph
  push();
  translate(width/2, height/2);
  rotate(angle);
  angle = angle+map(mouseX,20,width,-0.01,0.01);
  noFill();
  stroke('white');
  strokeWeight(1);
 
  for(let i = 0; i < circNum; i++){
    arc(0, 0, circSize + gap*i, circSize + gap*i, i*angle/3.333, 360-angle*gap);
  }
  pop();
 
 
}