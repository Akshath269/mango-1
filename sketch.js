
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4;
var world,boy,chain;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1100,180,30)
	mango3=new mango(1150,100,30)
    mango4= new mango(1150,180,30)
	treeObj=new tree(1050,580);
	stoneObj=new stone(240,430,30)
	groundObject=new ground(width/2,600,width,20);
	chain = new Chain(stoneObj.body,{x:200,y:430});
	Engine.run(engine);
  detectCollison(stoneObj,mango1)
  detectCollison(stoneObj,mango2)
  detectCollison(stoneObj,mango3)
  detectCollison(stoneObj,mango4)
}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display()
  stoneObj.display();
  groundObject.display();
  chain.display();
 // detectCollison()
  //keyPressed()

}


function mouseDragged(){
  Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})

}


function mouseReleased(){

chain.fly();

}


function detectCollison(stoneObj,mango){
mangoBodyPosition=mango.body.position
stoneObjBodyPosition=stoneObj.body.position

var distance=dist(stoneObjBodyPosition.x,stoneObjBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=mango.r+stoneObj.r){

Matter.body.setStatic(mango.body,false)







}



function keyPressed(){
if(keyCode === 32){

Matter.Body.setPosition(stoneObj.body,{x:235,y:420})
chain.attach(stoneObj.body)






}






}































}
