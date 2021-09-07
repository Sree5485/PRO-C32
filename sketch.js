const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var ball_obj;
var blower_obj, blowermouth_obj;

var button;



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  ball_obj= new ball(500,200,20,20)
  blower_obj=new Blower(490,200,10,50)
  blowermouth_obj=new Blowermouth(490,200,10,50)

  button=createButton("Click to blow")
  button.position(width/2,height-100);
  button.class("blowButton");
  button.mousePressed(blow);
}

function draw() {
  background(255,255,255);  


 ball_obj.show()
 blower_obj.show()
 blowermouth_obj.show()

  drawSprites();
}

function blow(){

  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.05})
}