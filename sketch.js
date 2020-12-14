
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground, trashcan1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
 

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600,630,1200,20)
	
	trashcan1 = new Trashcan(550,570,15,140);
	trashcan2 = new Trashcan(580,613,200,15);
	trashcan3 = new Trashcan(730,570,15,140);

	paper = new CrumpledPaper(200,200,25)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);


//because of black background ,paper will not show up
//background(0);

  background("cyan");
  Engine.update(engine);
  ground.display();

  trashcan1.display();
  trashcan2.display();
  trashcan3.display();

  paper.display();
 //keyPressed();
//drawSprites();
 }

 function keyPressed(){
   if (keyCode===UP_ARROW){
     Matter.Body.applyForce(paper.body,paper.body.position,{x:50, y:-55});
   }
 }




