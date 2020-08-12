
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3,paperObject,ground,bin;

function preload()
{

	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1 = new Box(725,630,20,110);
    box2 = new Box(615,630,20,110);
	box3 = new Box(670,680,100,20);
	paperObject= new Ball();
	ground = new Ground(400,height,800,20);
	bin = new Bin(670,620,100,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);
  box1.display();
  box2.display();
  

  bin.display();

  box3.display();

  ground.display();

  paperObject.display();

  
  drawSprites();
  console.log(bin);
 
}
function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:55,y:-55})
	}
}


