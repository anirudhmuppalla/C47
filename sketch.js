var Matt,Matt1, Matt2, MattImg,MattImg2, MattBlocking, MattAnimation;
var bg;
var MattPunching

function preload(){
  MattImg = loadImage("Images/Matt.png");
  MattImg2 = loadImage("Images/Matt.png");
  bg = loadImage("Images/stadium.jpg")
  MattAnimation=loadImage("Images/Matt-punching.png");
  MattBlocking=loadImage("Images/Matt-blocking.png");
}

function setup(){
  createCanvas(600,600);
  Matt = createSprite(200,400,10,10);
  Matt.addImage("Matt",MattImg)
  Matt.scale=.7
  Matt.debug=true;
  Matt2 = createSprite(400,400,10,10);
  Matt2.addImage("Matt2",MattImg2)
  Matt2.scale=.7
  Matt2.debug=true;

  
}

function draw(){
  background(bg);
  if(keyWentDown("w"))
  {
    
   Matt.addImage("Matt",MattAnimation)
  }
 else if(keyDown("s")){
    Matt.addImage("Matt",MattBlocking)

  }
 if(keyDown("a")){
   
   Matt2.x-=5;
  
   
 }
 if(keyDown("d")){
   
  Matt2.x+=5;
 
  
}
 if(Matt2.isTouching(Matt)){
   Matt2.addImage("Matt2",MattBlocking);
   Math.random()
 }else{
  Matt.addImage("Matt",MattImg)
 }
  drawSprites();
}
