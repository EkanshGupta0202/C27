const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var pendulum;
var balance;
var chain;

function setup(){
  createCanvas(800,800);
  
  engine = Engine.create();
  world = engine.world;
  pendulum = new Pendulum(342,251,200,10);
  balance = new Balance(340,525,100);
  chain = new Chain(balance.body,pendulum.body);
}

function draw(){
  background("black");
  text("Press any key to set the pendulum and release the key to make it move",200,100)
  Engine.update(engine);
  if(keyIsPressed === true){
    balance.body.position.x = mouseX;
    balance.body.position.y = mouseY;
  }
  chain.display();
  //console.log(mouseX);
  //console.log(mouseY)
  pendulum.display();
  balance.display();
}
//function keyPressed(){
  
//}