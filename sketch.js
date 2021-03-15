
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var spaceship;
var asteroid1,asteroid2,asteroid3,asteroid4,asteroid5,asteroid6,asteroid7,asteroid8;
var backgroundImg,platform;
var fire;
var score=0

var gameState = "onSling";
var bg="sprites/spaceBackground.png"
function preload() {
    
    getBackground();
}

function setup(){
    engine = Engine.create();
    world = engine.world;
      createCanvas(800,400);
      createSprite(400, 200, 50, 50);
}
    
    function draw() {
      background(255,255,255);  
      drawSprites();
    }

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    asteroid1 = new asteroid(700,320,70,70);
    asteroid2 = new asteroid(920,320,70,70);
    asteroid3 = new asteroid(810, 350);
    asteroid4 = new asteroid(810,260,300, PI/2);

    asteroid5= new asteroid(700,240,70,70);
    asteroid6= new asteroid(920,240,70,70);
    asteroid7= new asteroid(810, 220);
    asteroid8= new asteroid(810,160,70,70);
    

    fire= new fire(200,50);
    spaceship = new spaceship(fire.body,{x:200, y:50});
}

function draw(){
    if(backgroundImg)
    background(backgroundImg);
    noStroke();
    textSize(35)
    fill("white");
    text("score "+score,width-300,50)
    Engine.update(engine);
    //strokeWeight(4);
    asteroid1.display();
    asteroid2.display();
    asteroid3.display();
    asteroid4.display();
    asteroid5.display();
    asteroid6.display();

    asteroid7.display();
    asteroid8.display();
   
    fire.display();
    spaceship.display();    
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(fire.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    spaceship.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
    }
}
