
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var ball1, ball2, ball3, ball4, ball5;
var sling1, sling2, sling3, sling4, sling5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	ground1 = new Ground(300,50,450,25);
	ball1 = new Balls(200,350,50);
	ball2 = new Balls(250,350,50);
	ball3 = new Balls(300,350,50);
	ball4 = new Balls(350,350,50);
	ball5 = new Balls(400,350,50);

	sling1= new SlingShot(ball1.body,ground1.body,-50*2,0);
	sling2= new SlingShot(ball2.body,ground1.body,-25*2,0);
	sling3= new SlingShot(ball3.body,ground1.body,-0*2,0);
	sling4= new SlingShot(ball4.body,ground1.body,25*2,0);
	sling5= new SlingShot(ball5.body,ground1.body,50*2,0);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine);

  ground1.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

  keyPressed();
  
  drawSprites();
 
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(ball5.body,ball5.body.position,{x:-10,y:-10}); } 
} 




