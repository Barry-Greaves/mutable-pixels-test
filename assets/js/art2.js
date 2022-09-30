function setup() {
    const myCanvas = createCanvas(700, 700);
    myCanvas.parent('second-section');
}

function draw(){
	background(240);
	fill(0, 10);
	stroke(0, 160);
	
	translate(width/2, height/2);
	
	for (var i=0; i < 30; i++) {
		push();
		rotate(i / 5.0);
		scale(i / 8.0);
		triangle(0, -100, -10, 100, 10, 100);
		pop();
	}
}

var myp5 = new p5(s, 'second-section');