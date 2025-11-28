let titlefont;
let subfont;
let movingText = 'ui/ux designer ~ illustrator ~ graphic designer ~ animator ~ motion designer ~ creative coder ~ videomaker & photographer ~ ui/ux designer ~ illustrator ~ graphic designer ~ animator ~ motion designer ~ creative coder ~ videomaker & photographer ~ ui/ux designer ~ illustrator ~ graphic designer ~ animator ~ motion designer ~ creative coder ~ videomaker & photographer ~ ui/ux designer ~ illustrator ~ graphic designer ~ animator ~ motion designer ~ creative coder ~ videomaker & photographer ~ui/ux designer ~ illustrator ~ graphic designer ~ animator ~ motion designer ~ creative coder ~ videomaker & photographer ~ui/ux designer ~ illustrator ~ graphic designer ~ animator ~ motion designer ~ creative coder ~ videomaker & photographer ~ui/ux designer ~ illustrator ~ graphic designer ~ animator ~ motion designer ~ creative coder ~ videomaker & photographer ~'
let clicked= true;
let bg=255;


function preload(){
	titlefont = loadFont('fonts/PLANK.otf')
	subfont = loadFont('fonts/Karina.otf')
}

function setup() {
	
	createCanvas(windowWidth,windowHeight,WEBGL);
	rectMode(CENTER);
	
	frameRate(30)
	noStroke();
}

function  draw() {
	background(bg)

	push()
	translate(-1000,-170,-100)
	sub()
	pop()

	push()
	translate(-4000,100,-100)
	rotateX(500)
	sub2()
	pop()

	
	
	push()
	translate(-20,-100,-100);
	fill(0,255,0)
	textFont(titlefont);
   textSize(120);
	textAlign(CENTER)
	rotateY(mouseX*0.001-0.5)
	rotateX(mouseY*0.0006)
	text('Kiiwmee',90, 100)
	pop()

	push()
	translate(0, 0, 490)
	 if (clicked) {
     blendMode(BLEND);  
     fill(255, 255, 255, 0)   
     circle(-150, -120, 200);
   } else {
     blendMode(EXCLUSION); 
     fill(255)      
     circle(-150, -120, 2000);
   }
	pop()

	//mousecursor()
	
}


//function mousecursor(){
//	push()
//	translate(-width/2 + mouseX, -height/2 + mouseY, 500)
//	fill(255)
//	blendMode(EXCLUSION)
//	circle(-width/2 + mouseX, -height/2 + mouseY, 75)
//	pop()
//}

function sub(){	
	fill(0)
	textSize(28)
	textFont(subfont)
	text(movingText, frameCount*-2, -1)
}

function sub2(){	
	fill(0)
	textSize(28)
	textFont(subfont)
	text(movingText, frameCount*2, -1)
}


function mouseClicked(){
	
	clicked = !clicked

}
