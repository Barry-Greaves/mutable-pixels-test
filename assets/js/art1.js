let gap = 20;
let circNum = 30;
let circSize = 20;
let angle = 0;

function setup() {
const myCanvas = createCanvas(700, 700);
myCanvas.parent('sketch1');
angleMode(degrees);
}

function draw() {
  background('black');
 
  // main graph
  push();
  translate(width/2, height/2);
  rotate(angle);
  angle = angle+map(mouseY,1,width,-0.005,0.005);
  noFill();
  stroke('white');
  strokeWeight(1);
  for(let i = 0; i < circNum; i++){
    arc(0, 0, circSize + gap*i, circSize + gap*i, i*angle/3.333, 360-angle*gap);
  }
  pop();
 
}
var myp5 = new p5(s, 'sketch1');