var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var roof
var rope1
var bob1,bob2,bob3,bob4,bob5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	bob1=new Bob(100,250);
	bob2=new Bob(150,250);
	bob3=new Bob(100,250);
	bob4=new Bob(250,250);
	bob5=new Bob(300,250);

	roof=new Roof(400,100);

	
	rope1=new Rope(bob1.body,roof.body,0,0);
	console.log(rope1)
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,0,100);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  drawSprites();
 
}



