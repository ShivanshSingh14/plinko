const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint =  Matter.Constraint;
var engine, world;



var g;
var d1,d2,d4,d5,d6,d7,d8

var plinko=[];
var particle =[];

  






function setup() {
  var canvas = createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;

  g=new Ground(500,595,1000,10)
  d1=new Division(500,580,10,300)
  d2=new Division(334,580,10,300)
  d3=new Division(168,580,10,300)
  d4=new Division(666,580,10,300)
  d5=new Division(832,580,10,300)
  d6=new Division(5,580,10,300)
  d7=new Division(995,580,10,300)

  
}

function draw() {
  background(0,255);
  Engine.update(engine);
  
  for(var j=40;j<width;j=j+50){
    plinko.push(new Plinko(j,75))
}

for(var j=15;j<width-10;j=j+50){
  plinko.push(new Plinko(j,175))
}

for(var j=-15;j<width-20;j=j+50){
  plinko.push(new Plinko(j,275))
}
for(var j=-40;j<width-30;j=j+50){
  plinko.push(new Plinko(j,375))
}
    



if(frameCount%60===0){
  particle.push(new Particle(random(width/2-10,width/2+10),10,10))
}

  g.display();
  d1.display();
  d2.display();
  d3.display();
  d4.display();
  d5.display();
  d6.display();
  d7.display();
  for (var j = 0; j < plinko.length; j++) {
     
    plinko[j].display();
    
  }
  
  drawSprites();
}