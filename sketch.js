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
var socrates;
var aristoteles;
var goku;
var vegeta;

function preload(){
  papeldeparede = loadImage("./Imagens/background.png");
  magali = loadImage("./Imagens/melon.png");
  sansao = loadImage("./Imagens/Rabbit-01.png");
  goku = loadAnimation("./Imagens/blink_1.png","./Imagens/blink_2.png","./Imagens/blink_3.png");
  vegeta = loadAnimation("./Imagens/eat_0.png","./Imagens/eat_1.png","./Imagens/eat_2.png","./Imagens/eat_3.png","./Imagens/eat_4.png");

  goku.playing = true;
  vegeta.playing = true;

  goku.looping = true;
  vegeta.looping = false;
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

  goku.frameDelay = 15;
  vegeta.frameDelay = 15;

  piso = new Piso(200,690,600,20);
  teiadomiranha=new Rope(6,{x:245,y:30});
  lemon=Bodies.circle(300,300,15);
  Matter.Composite.add(teiadomiranha.body,lemon);
  colabastao=new Fitacrepe(teiadomiranha,lemon);
  socrates=createSprite(250,590,100,100);
  socrates.addImage(sansao);
  socrates.addAnimation("piscando", goku);
  socrates.addAnimation("comendo", vegeta);
  socrates.changeAnimation("piscando");
  socrates.scale=0.3;
  aristoteles=createImg("./Imagens/cut_btn.png");
  aristoteles.position(220,30);
  aristoteles.size(50,50);
  aristoteles.mouseClicked(platao);

}

function draw() 
{
  background(51);
  image(papeldeparede, width/2, height/2, 500, 700);

  Engine.update(engine);
  piso.tosemideia();
  teiadomiranha.show();
  image(magali,lemon.position.x,lemon.position.y,60,60);
  drawSprites();
}

function platao(){
  teiadomiranha.break();
  colabastao.invisible();
  colabastao=null;
}


