const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
	paper = new PaperObj (100,570,20);
	dustbin = new DustbinObj (900,575,150,20);
	dustbin1 = new DustbinObj (820,550,20,100);
	dustbin2 = new DustbinObj (970,550,20,100);
	ground = new GroundObj(610,600,1200,30);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  dustbin.display();
  dustbin1.display();
  dustbin2.display();
  ground.display();
  keyPressed();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}
