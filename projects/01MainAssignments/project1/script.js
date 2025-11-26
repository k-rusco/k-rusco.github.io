let len = 10;
let bg;

function setup() {
	createCanvas(windowWidth,windowHeight,WEBGL);
	background(0);
	frameRate(30);
	rectMode(CENTER);
	bg = color(0);
}

function  draw() {
	background(bg);
	fill(255)
    textSize(width / 3);
	rotateY(mouseX)
	text('Kiiwmee', 100, 100)
	
}

