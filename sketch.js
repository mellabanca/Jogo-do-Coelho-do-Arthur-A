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
var piso;
var teiadomiranha;
var lemon;
var colabastao;
var papeldeparede;
var magali;
var sansao;

function preload(){
  papeldeparede = loadImage("./Imagens/background.png");
  magali = loadImage("./Imagens/melon.png");
  sansao = loadImage("./Imagens/Rabbit-01.png");
}

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  imageMode(CENTER);
  textSize(50);

  piso = new Piso(200,690,600,20);
  teiadomiranha=new Rope(6,{x:245,y:30});
  lemon=Bodies.circle(300,300,15);
  Matter.Composite.add(teiadomiranha.body,lemon);
  colabastao=new Fitacrepe(teiadomiranha,lemon);
}

function draw() 
{
  background(51);
  image(papeldeparede, width/2, height/2, 500, 700);

  Engine.update(engine);
  piso.tosemideia();
  teiadomiranha.show();
  image(magali,lemon.position.x,lemon.position.y,60,60);
}




