//Create variables here
var img,img2
var dog, happyDog, database, foodS, foodStock
function preload()
{
  //load images here
  img = loadImage('images/dogImg.png');
  happyDog = loadImage('images/dogImg1.png');
}

function setup() {
  database = firebase.database();

  createCanvas(500, 500);
  
  dog = createSprite(250,330,10,10);
  dog.addImage(img);
  dog.scale = 0.4;
  
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46, 139, 87)

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}
drawSprites();
textFont('arial');
textSize(40);
fill("white");
text("food stock: "+foodS,130,160);
textSize(15);
text("note: use up arrow key to feed spot milk.",120,50);
  
  //add styles here

}
function readStock(data){
  foodS = data.val();
}

function writeStock(x){

  if(x<=0){
    x = 0;
  }
  else(x = x-1);

  database.ref('/').update()({
    Food:x
  })
}



