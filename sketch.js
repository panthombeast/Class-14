var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud,cloudImg;
var obstacle,obImg1,obImg2,obImg3,obImg4,obImg5,obImg6;
 






var score;


function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  cloudImg = loadImage("cloud.png");
  

  groundImage = loadImage("ground2.png");
  
 obImg1 = loadImage("obstacle1.png");
 obImg2 = loadImage("obstacle2.png");
 obImg3 = loadImage("obstacle3.png");
 obImg4 = loadImage("obstacle4.png");
 obImg5 = loadImage("obstacle5.png");
 obImg6 = loadImage("obstacle6.png");
  
}

function setup() {

  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  //generate random numbers
  var rand =  Math.round(random(1,100))
  console.log(rand)

}

function draw() {
  //set background color
  background(180);
  
  console.log(trex.y)
  
  
  
  // jump when the space key is pressed
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround);
  
  //Spawn Clouds
  spawnClouds()

  spawnObstacles();
  
  drawSprites();
}

//function to spawn the clouds
function spawnClouds(){
  // write your code here 
  if(frameCount%60===0){
    cloud=createSprite(600,100,40,10);
    cloud.y=Math.round(random(70,120));
    cloud.addImage(cloudImg);
    cloud.velocityX=-3;
    cloud.scale=0.5;
    cloud.lifetime=200;
    cloud.depth=trex.depth;
    trex.depth=trex.depth+1;
  }
  
 
}



function spawnObstacles(){
  if(frameCount%60===0){
    obstacle=createSprite(600,170,50,50);
    var num=Math.round(random(1,6));

    switch(num){
      case 1: obstacle.addImage(obImg1);
      break;
      case 2: obstacle.addImage(obImg2);
      break;
      case 3: obstacle.addImage(obImg3);
      break;
      case 4: obstacle.addImage(obImg4);
      break;
      case 5: obstacle.addImage(obImg5);
      break;
      case 6: obstacle.addImage(obImg6);
      break;
      default: break;
    }
    obstacle.scale=0.5;

    obstacle.velocityX=-4;
    obstacle.lifetime=150;   
  

  
  }
  
}




