var canvas;
var music;
var blue; green; yellow; red;
var box;

function preload(){
    music = loadSound("music.mp3");
}
 
function setup(){
    canvas = createCanvas(800,600);

     blue=createSprite(100,550,70,10);
     blue.shapeColor="blue";

     green=createSprite(300,550,70,10);
     green.shapeColor="green";

     yellow=createSprite(500,550,70,10);
     yellow.shapeColor="yellow";

     red=createSprite(700,550,70,10);
     red.shapeColor="red";

     box=createSprite(random(20,750),10,20,20);
     box.shapeColor="box";
     box.velocityY=3;
     box.velocityX=3;

}

function draw() {
    background(rgb(0,0,0));

    edges=createEdgeSprites();
    box.bounceOff(edges);

    if(isTouching(box, blue)){
        box.shapeColor = "blue";
        box.velocityY=0;
        box.velocityX=0;
        music.play();
      }

      if(isTouching(box, green)){
        box.shapeColor = "green";
        box.velocityY=0;
        box.velocityX=0;
        music.play();
      }

      if(isTouching(box, yellow)){
        box.shapeColor = "yellow";
        box.velocityY=0;
        box.velocityX=0;
        music.play();
      }

      if(isTouching(box, red)){
        box.shapeColor = "red";
        box.velocityY=0;
        box.velocityX=0;
        music.play();
      }

   drawSprites();
}

function isTouching(object1,object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2) {
      
        return true;
      }
      else {
        return false;
      } 
    }