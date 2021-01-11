const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Engine = Matter.Engine
const World = Matter.World
var umbrella,drop;
var maxDrops=100;
function preload(){
    
}

function setup(){
   createCanvas(displayWidth,displayHeight)
   engine = Engine.create();
   world = engine.world;
    umbrella = new Umbrella(200,200,200);
    drop = new createDrop(200,200)
}

function draw(){
    background("black");
    for (var i=0; i<maxDrops; i++){

        drop.push (new createDrop(random(0, 400), random(0, 400) ) ) ;
    } 
    if (this.rain.position.y > height){

        Matter.Body.setPosition ( this.rain, {x: random(0, 400), y: random(0, 400) })
    } 
    
    umbrella.display();
    drop.display();
} 


