
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperobject,groundSprite
var point;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paperobject = new Paper(50,600,50)
groundSprite=createSprite(width/2, height-30, width,10);
groundSprite.shapeColor="white"

box1 = createSprite(700, height-25, 150,20);
	box1.shapeColor = "red"
	box1.scale=1
	box2 = createSprite(625, height-115, 20,200);
	box2.shapeColor = "red"
	box2.scale=1
	box3 = createSprite(775, height-115, 20,200);
	box3.shapeColor = "red"
	box3.scale=1

	Engine.run(engine);
	box1 = Bodies.rectangle(700, height-25, 150, 20 , {isStatic:true} );
	 World.add(world, box1);
	 box2 = Bodies.rectangle(625, height-115, 20, 200 , {isStatic:true} );
 	World.add(world, box2);
	 box3 = Bodies.rectangle(775, height-115, 20, 200 , {isStatic:true} );
 	World.add(world, box3);
	 groundSprite = Bodies.rectangle(400, height-25, 800, 10 , {isStatic:true} );
	 World.add(world, groundSprite);
	 point = 0
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperobject.display()
  drawSprites();
  KeyPressed()
 
}
function KeyPressed(){
	if(point<1){
	if(keyWentDown("up")){
		Matter.Body.applyForce(paperobject.body,paperobject.body.position,{x:125,y:-135})
		point = point +1
	}

}
}


