var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var willImg, will, willsGroup
var will
var PLAY=1;
var END=0;
var gameState=PLAY
var ended, endImg
var chairs


function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  willImg = loadImage("will.png");
  chairsImg = loadImage("chairs.webp")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;
willsGroup = new Group();
 
//chairs
chairs= createSprite(200,1,400,10)
chairs.addImage(chairsImg)
chairs.scale=.45

//creating wills
//var will = createSprite(200,50);
//will.addImage(willImg)
//will.scale=0.1




//creating boy running
boy = createSprite(180,340,30,30);
boy.scale=0.15;
boy.addAnimation("JakeRunning",boyImg);
boy.velocityX=10

boy.debug=true

boy.setCollider("circle", 0,0,50)

leftBoundary=createSprite(0,0,100,800);

// leftBoundary.invisible = false;
// leftBoundary.visible = true;
// leftBoundary.invisible = true;
leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  if (gameState===PLAY){
  if(keyDown("left_arrow")){
    boy.x = boy.x - 5;
  }
  
  if(keyDown("right_arrow")){
    boy.x = boy.x + 5;
  }

  path.velocityY = 4;
  
  //boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  //boy.collide(willsGroup)
 

  spawnwills()
  
  //code to reset the background

  if(path.y > 400 ){
    path.y = height/2;
  }
  if (boy.isTouching(willsGroup)){
   // path.velocityY=0
    //willsGroup.velocityY=0
    boy.collide(will)
    ameState=End
    stroke("yellow");
    fill("yellow");
    gameState=End
  


  }

}




else if (gameState===End){
  //ended=createSprite(200,200);
  //endImg = loadImage("unnamed");
  //.addImage(endImg);
}

  
  drawSprites();
 

}

function spawnwills(){
  if (frameCount%82===0){
    var will = createSprite(200,50);
    will.addImage(willImg)
    will.velocityY=5

    will.scale=0.07
    will.x = Math.round(random(120,300));

    var will = createSprite(250,);
    will.addImage(willImg)
    will.velocityY=5
    will.scale=0.07
    will.x = Math.round(random(120,300));
    




  //console.log(will.depth)
  will.lifetime=100;
will.depth-=5
  willsGroup.add(will);
  //console.log(boy.depth)
//boy.depth=100
 
}
}
