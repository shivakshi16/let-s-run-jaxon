var path,path_img
  var boy_run,boy
  var boundaryleft
  var boundaryright
  
  function preload(){
  //pre-load images
  path_img=loadImage("path.png")
  boy_run=loadAnimation("Runner-2.png", "Runner-1.png")

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200)
  path.addImage(path_img )
  path.velocityY=4
  path.scale=1.2

  boy=createSprite(200,200)
  boy.addAnimation("running", boy_run);
  boy.scale=0.1

 boundaryleft =createSprite(100,100)
  boundaryleft.visible=false

 boundaryright =createSprite(100,100)
  boundaryright.visible=false


}

function draw() {
  background(0);
  if(path.y>400){
  path.y=height/2;
  }
  boy.x=World.mouseX
  boy.collide(boundaryleft)
  boy.collide(boundaryright)
   
  drawSprites();
  
}
