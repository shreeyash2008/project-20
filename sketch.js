var bgImg;
var cat,catImg,catImg2;
var mouse,mouseImg,mouseImg2;

function preload(){
bgImg=loadImage("images/garden.png");
catImg=loadImage("images/cat1.png");
mouseImg=loadImage("images/mouse4.png");
catImg2=loadAnimation("images/cat2.png","images/cat3.png");
mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
}

function setup(){
createCanvas(1000,800)
   cat=createSprite(800,700,15,15);
   cat.addImage(catImg);
   cat.scale=0.15

   mouse=createSprite(100,700,15,15);
   mouse.addImage(mouseImg);
   mouse.scale=0.1
}

function draw(){
background(bgImg)

if(cat.x-mouse.x <(cat.width/2-mouse.width/2)){
   cat.changeAnimation(catImg);
   mouse.changeAnimation(mouseImg);
}



keyPressed();
drawSprites();
}

function keyPressed(){
   if(keyCode===RIGHT_ARROW){
mouse.addAnimation("mouseTeasing",mouseImg2)
mouse.changeAnimation("mouseTeasing")
   }
} 