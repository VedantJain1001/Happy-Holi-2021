const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function preload() {
    backgroundImg = loadImage("sprites/book.jpg");
}

function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;
    
    HoliProp = new Prop(300,300,300,300)
    wishHoli = new Wish(570,280,220,190)  
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    wishHoli.display()
    HoliProp.display()
}
