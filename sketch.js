
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var roofObject,bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObject=new roof(0,100,800,100);
	bobObject1=new bob(90,600,70);
	bobObject2=new bob(250,600,70);
	bobObject3=new bob(410,600,70);
	bobObject4=new bob(570,600,70);
	bobObject5=new bob(720,600,70);

    rope=new rope(bobObject1.body,roofObject.body,+bobDiameter*2,0);
	rope=new rope(bobObject2.body,roofObject.body,+bobDiameter*2,0);
	rope=new rope(bobObject3.body,roofObject.body,+bobDiameter*2,0);
	rope=new rope(bobObject4.body,roofObject.body,+bobDiameter*2,0);
	rope=new rope(bobObject5.body,roofObject.body,+bobDiameter*2,0);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:50,y:405});
	}
}



