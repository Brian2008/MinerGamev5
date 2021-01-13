
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var player,playerImage
var pickaxe,pickaxeImage
var stone,stone1,stone2,stone3,stone4,stone5,stone6,stone7,stoneGroup,stoneImage
var gold,goldImage
var Chain
var stoneArray = [];
var stoneArray1 = [];
var stoneArray2 = [];
var stoneArray3 = [];
var stoneArray4 = [];
var stoneArray5 = [];
var stoneArray6 = [];
var d, e, f, g , h , i, j, k, l, m, n
var index

function preload()
{
	playerImage=loadImage("MyGame/Miner.png")
	stoneImage=loadImage("MyGame/Stone.png")
	goldImage=loadImage("MyGame/GoldBlock.png")
	pickaxeImage=loadImage("MyGame/Pickaxe.png")
}

function setup() {
	createCanvas(1000, 1000);


	engine = Engine.create();
	world = engine.world;
	player=createSprite(500,100,20,20);
	player.addImage(playerImage)
	player.scale=0.2
	pickaxe = createSprite(500,100,20,20)
	pickaxe.addImage(pickaxeImage)
	pickaxe.scale=0.25
	gold=createSprite(500,900,50,50)
	gold.addImage(goldImage)
	gold.scale=0.2
	//stoneGroup = new Group();

	for (i = 0; i < 1200; i+=50) {
		stone1=createSprite(i,200,50,50)
		stone1.addImage(stoneImage)
		stone1.scale=0.15
		stoneArray.push(stone1)
		//stoneGroup.add(stone1);
	}
	console.log(stoneArray)
	for (c = 0; c < 1200; c+=50) {
		stone2=createSprite(c,300,50,50)
		stone2.addImage(stoneImage)
		stone2.scale=0.15
		stoneArray1.push(stone2)
	}

	for (x = 0; x < 1200; x+=50) {
		stone3=createSprite(x,400,50,50)
		stone3.addImage(stoneImage)
		stone3.scale=0.15
		stoneArray2.push(stone3)
	} 
	for (y = 0; y < 1200; y+=50) {
		stone4=createSprite(y,500,50,50)
		stone4.addImage(stoneImage)
		stone4.scale=0.15
		stoneArray3.push(stone4)
	}
	for (a = 0; a < 1200; a+=50) {
		stone5=createSprite(a,600,50,50)
		stone5.addImage(stoneImage)
		stone5.scale=0.15
		stoneArray4.push(stone5)
	} 
	for (z = 0; z < 1200; z+=50) {
		stone6=createSprite(z,700,50,50)
		stone6.addImage(stoneImage)
		stone6.scale=0.15
		stoneArray5.push(stone6)
	}
	for (b = 0; b < 1200; b+=50) {
		stone7=createSprite(b,800,50,50)
		stone7.addImage(stoneImage)
		stone7.scale=0.15
		stoneArray6.push(stone7)
	}
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if (keyDown("q")){
	pickaxe.velocityY=-5
}	
  if(keyDown("w")){
	player.y=player.y-10
  }
  if(keyDown("a")){
	player.x=player.x-10
  }
  if(keyDown("d")){
	player.x=player.x+10
  }
  if(keyDown("s")){
	player.y=player.y+10
  }
  
	for(d=0;d < stoneArray.length;d++){
 if(stoneArray[d].isTouching(player)){
	 //stoneGroup.destroyEach();
	 stoneArray[d].destroy();
 }
}

   for(f=0;f < stoneArray1.length;f++){
	if(stoneArray1[f].isTouching(player)){
		//stoneGroup.destroyEach();
		stoneArray1[f].destroy();
		
   }
   }
   for(g=0;g < stoneArray2.length;g++){
	if(stoneArray2[g].isTouching(player)){
		//stoneGroup.destroyEach();
		stoneArray2[g].destroy();
		
   }
   }
   for(h=0;h < stoneArray3.length;h++){
	if(stoneArray3[h].isTouching(player)){
		//stoneGroup.destroyEach();
		stoneArray3[h].destroy();
		
   }
   }
   for(j=0;j < stoneArray4.length;j++){
	if(stoneArray4[j].isTouching(player)){
		//stoneGroup.destroyEach();
		stoneArray4[j].destroy();
		
   }
   }
   for(k=0;k < stoneArray5.length;k++){
	if(stoneArray5[k].isTouching(player)){
		//stoneGroup.destroyEach();
		stoneArray5[k].destroy();
		
   }
   }
   for(l=0;l < stoneArray6.length;l++){
	if(stoneArray6[l].isTouching(player)){
		//stoneGroup.destroyEach();
		stoneArray6[l].destroy();
   }
   }
   
  
  drawSprites();

}



