
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    
	//Create the Bodies Here.
	m1=new mango(470,320)
	m2=new mango(530,260)
	m3=new mango(660,360)
	m4=new mango(545,330)
	m5=new mango(710,330)
	m6=new mango(765,360)
	m7=new mango(500,360)
	m8=new mango(590,270)
	Tree=new tree()
	Boy=new boy()
	Rock=new rock()
	sling=new chain({x:145,y:465},Rock.body)
	land=new ground()
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  console.log(mouseX,mouseY)
  land.display()
  Tree.display()
  
 
  detectcollision(m1)
  detectcollision(m2)
  detectcollision(m3)
  detectcollision(m4)
  detectcollision(m5)
  detectcollision(m6)
  detectcollision(m7)
  detectcollision(m8)
  m1.display()
  m2.display()
  m3.display()
  m4.display()
  m5.display()
  m6.display()
  m7.display()
  m8.display()
  Boy.display()
  Rock.display()
  sling.display()
  
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(Rock.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
	sling.fly()
}
function keyPressed(){
	if(keyCode===32){
		sling.attach(Rock.body)
	}
}
function detectcollision(mangobody){
	var pos=mangobody.body.position
	var pose=Rock.body.position
	var distance=dist(pos.x,pos.y,pose.x,pose.y)
	if(distance<60){
	Matter.Body.setStatic(mangobody.body,false)
}}
