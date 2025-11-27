let hover;
let posX;
let posY;
let dia = 200;
let fonto;
let okcolor;

function preload(){
fonto = loadFont('fonts/Karina.otf')
}

function setup() {
	createCanvas(windowWidth,windowHeight);
	background(255);
	noStroke();	
	posX = width/2;
	posY = height/2;
	textFont(fonto)	
}

function draw() {
	background(255);
	
	hover = dist(mouseX, mouseY, posX, posY)
	
	
	okbutton()
	title()
}

function okbutton(){
	if (hover < dia/2+150) {
		fill(0,255,0);
		posX =posX+7
		posY = posY+4
		okcolor = color(0)
	} else {
		fill(0);
		posX=posX
		okcolor = color(255)
	}
	circle(posX, posY, dia);
	fill(okcolor)
	textAlign(CENTER)
	textSize(40)
	text('OK', posX, posY+10)
	
}

function title(){
	fill(0)
	textSize(40)
	text('Click "OK" to cancel your subscription', windowWidth/2 ,windowHeight/4)
}

function mouseClicked(){
	okbutton()
}
