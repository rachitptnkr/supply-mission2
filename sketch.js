var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var r1,r2,r3;
var p1,p2,p3;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	r1=createSprite(295,600,10,100)
	r1.shapeColor="red"

	r2=createSprite(400,645,200,10)
	r2.shapeColor="red"

	r3=createSprite(495,600,10,100)
	r3.shapeColor="red"

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, 645, 200,10);
	groundSprite.shapeColor="red"


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(645, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 p1 = Bodies.rectangle(295,600,10,100, {isStatic:true} );
	 World.add(world, p1);

	 p2 = Bodies.rectangle(400,645,200,10, {isStatic:true} );
	 World.add(world, p2);
	 
	 p3 = Bodies.rectangle(495,600,10,100, {isStatic:true} );
	 World.add(world, p3); 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



