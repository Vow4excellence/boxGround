const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground1;
var ball,box1, box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box(200, 300, 50, 50);
    box2 = new Box(240, 100, 50,100);
    ground1 = new ground(200,390,400,20);
 /* var ball_options ={
      restitution: 1.1
    }
    ball = Bodies.circle(600,100,40, ball_options);
    World.add(world,ball);*/
}

function draw(){
    background(0);
    Engine.update(engine);
    //ellipseMode(RADIUS);
    box1.display();
    box2.display();
    ground1.display();
    //ellipse(ball.position.x,ball.position.y, 40, 40);

}
