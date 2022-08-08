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
var gohan;
var mestreKame;
var kuririn;
var raditz;
var bills;
var majinBoo;

function preload(){
  papeldeparede = loadImage("./Imagens/background.png");
  magali = loadImage("./Imagens/melon.png");
  sansao = loadImage("./Imagens/Rabbit-01.png");
  goku = loadAnimation("./Imagens/blink_1.png","./Imagens/blink_2.png","./Imagens/blink_3.png");
  vegeta = loadAnimation("./Imagens/eat_0.png","./Imagens/eat_1.png","./Imagens/eat_2.png","./Imagens/eat_3.png","./Imagens/eat_4.png");
  gohan = loadAnimation("./Imagens/sad_1.png","./Imagens/sad_2.png","./Imagens/sad_3.png",);
  mestreKame = loadSound("./Sons/sound1.mp3");
  kuririn = loadSound("./Sons/rope_cut.mp3");
  raditz = loadSound("./Sons/sad.wav");
  bills = loadSound("./Sons/eating_sound;mp3");
  majinBoo = loadSound("./Sons/air.wav");

  goku.playing = true;
  vegeta.playing = true;
  gohan.playing = true;

  goku.looping = true;
  vegeta.looping = false;
  gohan.looping = false;
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
  socrates.addAnimation("triste", gohan);
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
  if(lemon !== null){
  image(magali,lemon.position.x,lemon.position.y,60,60);
  }

  if(cell(lemon,socrates) === true){
    socrates.changeAnimation("comendo");
  }

  if(lemon !== null && lemon.position.y >= 650){
    socrates.changeAnimation("triste");
  }
  drawSprites();
}

function platao(){
  teiadomiranha.break();
  colabastao.invisible();
  colabastao=null;
}

function cell(melancia,coelho){
  if(lemon !== null){
    var freeza = dist(melancia.position.x, melancia.position.y, coelho.position.x, coelho.position.y);
    if(freeza <= 80){
      World.remove(engine.world, lemon);
      lemon = null;
      return true;
    } else {
      return false;
    }
  }
}
